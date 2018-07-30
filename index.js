module.exports = async function (snapname) {
    let snekfetch = require('snekfetch')
    return new Promise((resolve, reject) => {
        if (!snapname || typeof snapname !== 'string') reject(new Error('Invalid snap name input.'));
        (async function() {
            let url = 'https://storysharing.snapchat.com/v1/fetch/' + snapname
            try {
                let snapInfo = (await snekfetch.get(url)).body.story
                resolve(new snapChat(snapInfo))
            } catch(e) {reject(new Error('User not found. Only public stories are accessible.'))}
        })()
    })
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
}