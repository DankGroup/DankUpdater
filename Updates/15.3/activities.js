const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const activity_options = {
  'youtube': '880218394199220334',
  'poker': '755827207812677713',
  'chess': '832012774040141894',
  'chess dev': '832012586023256104',
  'betrayal': '773336526917861400',
  'fishing': '814288819477020702',
  'letter tile': '879863686565621790', 
  'word snack': '879863976006127627', 
  'doodle crew': '878067389634314250', 
  'awkword': '879863881349087252', 
  'spell cast': '852509694341283871',
  'checkers': '832013003968348200',
  'sketchy artist': '879864070101172255',
  'poker dev': '763133495793942528',
};
if (context.params.event.content.startsWith('activity-')) {
  let selected_activity = activity_options[`${context.params.event.content.split(' ')[1].toLowerCase()}`];
  if (selected_activity) {
    let invite = await lib.discord.invites['@0.1.0'].create({
      channel_id: `${process.env.activity_channel_id}`,
      max_age: 86400,
      max_uses: 0,
      temporary: false,
      unique: false,
      target_type: 'EMBEDDED_APPLICATION',
      target_application_id: `${selected_activity}`
    });
    await lib.discord.channels['@0.2.0'].messages.create({
      channel_id: context.params.event.channel_id,
      content: ``,
      message_reference: {
        message_id: context.params.event.id,
      },
      embeds: [
        {
          type: 'rich',
          title: ``,
          description: `Click [here](https://discord.com/invite/${invite.code}) to play **${context.params.event.content.split(' ')[1].toUpperCase()}**!`,
          color: 0x00ff04,
          thumbnail: {
            url: `https://cdn.discordapp.com/app-icons/${invite.target_application.id}/${invite.target_application.icon}.png`,
            height: 0,
            width: 0,
          },
        },
      ],
    });
  } else {
    return lib.discord.channels['@0.2.0'].messages.create({
      channel_id: context.params.event.channel_id,
      content: `Invalid activity!`,
    });
  }
}
