// Replace the existing file titled about.js in /Functions/Events/
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `About this bot`,
      "description": "",
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `Dank Utilities Version: 15.2`,
          "value": `This release came with various stablility and optimizations. `
        },
        {
          "name": `Installed Plugins:`,
          "value": `- Dank Media Player \n- DankAI Moderator\n- DM Messager`
        }
      ],
      "footer": {
        "text": `Developed with ❤️ by Dank Group and ????????#6065`
      }
    }
  ]
});
