const { joinVoiceChannel } = require('@discordjs/voice')
const { InteractionContextType, MessageFlags} = require('discord.js')

module.exports = {
  name: 'leave',
  description: 'quit bot of the call',
  testOnly: false,
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


    interaction.reply({
        content: 'Vlw Flw',
        flags: MessageFlags.Ephemeral
    })


  },
};
