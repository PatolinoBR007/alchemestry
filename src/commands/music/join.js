const { joinVoiceChannel } = require('@discordjs/voice')
const { InteractionContextType, MessageFlags} = require('discord.js')

module.exports = {
  name: 'join',
  description: 'Join bot in a call',
  testOnly: false,
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


    interaction.reply({
        content: `voiceChannel: info ${voiceChannel.id} ${voiceChannel.name}`,
        // flags: MessageFlags.Ephemeral

    })


  },
};
