const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 5,
          "label": `Newgrounds`,
          "url": `https://cheesycoke.newgrounds.com/`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `Twitter`,
          "url": `https://twitter.com/cheesycokeart`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `Tumblr`,
          "url": `https://cheesycokeart.tumblr.com/`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `Bluesky`,
          "url": `https://bsky.app/profile/cheesycoke.bsky.social`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `Itch.io`,
          "url": `https://cheesycoke.itch.io/`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `Toyhouse`,
          "url": `https://toyhou.se/cheesycoke/`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `cheesycoke`,
      "description": "",
      "color": 0xff00ff,
      "image": {
        "url": `https://www.cheesycoke.com/branding/logo300.png`,
        "height": 0,
        "width": 0
      },
      "url": `https://www.cheesycoke.com/`
    }
  ]
});
