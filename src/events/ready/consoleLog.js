module.exports = async (client) => {
  console.log(`${client.user.tag} is online.`);

  await require('./01registerCommands.js')(client);
};