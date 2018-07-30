# Installing
```npm install snapchat-stories```

# Usage
```javascript
let snapchat = require('snapchat-stories')
snapchat('djkhaled305').then((snapInfo) => {
    console.log(snapInfo)
}).catch(e => console.log(e))
```
Expected output:
```javascript
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
```
