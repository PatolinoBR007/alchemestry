const { joinVoiceChannel } = require('@discordjs/voice')

module.exports = {
  name: 'leave',
  description: 'quit bot of the call',
  testOnly: true,
  // options: Object[],

  callback: (client, interaction) => {
    
    const voiceChannel = interaction.member.voice.channel

    const conection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false,

    })

    conection.destroy()


    interaction.reply(`voiceChannel: info ${voiceChannel.id} ${voiceChannel.name}`)


  },
};
