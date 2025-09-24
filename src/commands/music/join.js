const { joinVoiceChannel } = require('@discordjs/voice')
const { InteractionContextType, MessageFlags} = require('discord.js')

module.exports = {
  name: 'join',
  description: 'Join bot in a call',
  testOnly: false,
  // options: Object[],

  callback: (client, interaction) => {

    const voiceChannel = interaction.member?.voice?.channel
    
    if (!voiceChannel) {
      return interaction.reply({
        content: "❌ Você precisa estar em um canal de voz primeiro!",
        flags: MessageFlags.Ephemeral, // mensagem só visível pro usuário
      });
    }


    const conection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false,
    })

    interaction.reply({
        content: `voiceChannel: Size: **${voiceChannel.members.size}**     __${voiceChannel.name}__`,
        // flags: MessageFlags.Ephemeral
    })
  },
};
