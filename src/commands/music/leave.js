const { getVoiceConnection } = require('@discordjs/voice');
const { MessageFlags } = require('discord.js');

module.exports = {
  name: 'leave',
  description: 'Quit the bot from the voice channel',
  testOnly: false,

  callback: (client, interaction) => {
    const connection = getVoiceConnection(interaction.guild.id);

    if (!connection) {
      return interaction.reply({
        content: 'Não estou conectado a um canal de voz.',
        flags: MessageFlags.Ephemeral,
      });
    }

    connection.destroy();

    interaction.reply({
      content: 'Vlw Flw',
      flags: MessageFlags.Ephemeral,
    });
  },
};
