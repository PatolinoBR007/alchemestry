module.exports = async (client, guildId) => {
  let applicationCommands;

  if (guildId) {
    const guild = await client.guilds.fetch(guildId);
    applicationCommands = guild.commands;
  } else {
    applicationCommands = client.application.commands;
  }

  const commands = await applicationCommands.fetch();

  return {
    manager: applicationCommands,
    commands,
  };
};