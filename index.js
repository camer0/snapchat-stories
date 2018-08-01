const snekfetch = require('snekfetch')
const svgToImg = require("svg-to-img");

module.exports = {
    getSnaps: async function (snapname) {
        return new Promise((resolve, reject) => {
            if (!snapname || typeof snapname !== 'string') reject(new Error('Invalid snap name input.'));
            (async function () {
                let url = 'https://storysharing.snapchat.com/v1/fetch/' + snapname
                try {
                    let snapInfo = (await snekfetch.get(url)).body.story
                    resolve(new snapChat(snapInfo))
                } catch (e) { reject(new Error('User not found. Only public stories are accessible.')) }
            })()
        })
    },
    getSnapcode: async function(id) {
        return new Promise(resolve => {
            (async function () {
                let toReturn = {svg: '', png: '', nobitmoji: ''}
                let baseurl = `https://app.snapchat.com/web/deeplink/snapcode?username=${id}&type=`
                toReturn.svg = (await snekfetch.get(baseurl + 'SVG')).body
                toReturn.png = await svgToImg.from(toReturn.svg).toPng()
                toReturn.nobitmoji = (await snekfetch.get(baseurl + 'PNG')).body
                resolve(toReturn)
            })()
        })
    }
}

class snapChat {
    constructor(snapInfo) {
        this.metadata = snapInfo.metadata
        this.user = snapInfo.metadata.title
        this.id = snapInfo.id
        this.snaps = this.getSnapArray(snapInfo)
    }
    getSnapArray(info) {
        let snaps = []
        if (!info.snaps) return []
        for (let snap of info.snaps) {

            snaps.push(snap.media.mediaUrl)
        }
        return snaps
    }
    async getSnapcode() {
        return new Promise(resolve => {
            module.exports.getSnapcode(this.id).then((codes) => resolve(codes))
        })
    }
}