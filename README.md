Uses the snapchat storysharing api to asynchronously fetch snapchat stories and a bit of user information from **public** snapchat stories.

# Installing
```npm install snapchat-stories```

# Usage
```javascript
let snapchat = require('snapchat-stories')
snapchat.getSnaps('djkhaled305').then(async (snapInfo) => {
    console.log(snapInfo)
    let snapcode = await snapInfo.getSnapcode()
    console.log(snapcode)
}).catch(e => console.log(e))
//Returns an error if the user doesn't exist or doesn't have public stories enabled.
```
Expected output:
```javascript
//snapInfo
{
  metadata:
   { storyType: 'TYPE_PUBLIC_USER_STORY',
     title: 'DJ Khaled',
     emoji: '🔑',
     canonicalUrlSuffix: 'story/djkhaled305/dj-khaled' },
  user: 'DJ Khaled',
  id: 'djkhaled305',
  snaps:
   ['https://s.sc-cdn.net/1d/lnc1krt0fOrGzVqJmUuvl5-i49nosIa0T07gWO-JlDI=/default/embedded.mp4',
     'https://s.sc-cdn.net/1d/61igcPbFcUHHWnOiG4yZaa_RmgLVIPGOUCVd-bJUGGs=/default/embedded.mp4',
     'https://s.sc-cdn.net/1d/nnNbqqyUygNgUlvwI69l7efCVFtpHMI9bhAn9HcVYsM=/default/embedded.mp4']
}

//snapcode
{ svg:
   <Buffer ... >,
  png:
   <Buffer ... >,
  nobitmoji:
   <Buffer  ... > }
```

Also can fetch snapcodes from any user. Returns an object that includes an SVG buffer, a PNG buffer, and a PNG buffer with no bitmoji.

```javascript
let snapchat = require('snapchat-stories')
let fs = require('fs')
snapchat.getSnapcode('joshuadun').then((snapcode) => {
    fs.writeFile('./snapcode.png', snapcode.png, (err) => {
        if (err) console.log(err)
    })
    fs.writeFile('./nobitmoji.png', snapcode.nobitmoji, (err) => {
        if (err) console.log(err)
    })
})
```

Expected output:

![picture](https://i.imgur.com/o5Aqmrg.png)

![picture](https://i.imgur.com/oSg53O7.png)
