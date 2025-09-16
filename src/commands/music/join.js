const { joinVoiceChannel } = require('@discordjs/voice')

module.exports = {
  name: 'join',
  description: 'Join bot in a call',
  testOnly: true,
  // options: Object[],

  callback: (client, interaction) => {
    
    const voiceChannel = interaction.member.voice.channel

// console.log(voiceChannel)

    const conection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false,

    })


    interaction.reply(`voiceChannel: info ${voiceChannel.id} ${voiceChannel.name}`)


  },
};
