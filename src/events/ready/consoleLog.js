module.exports = (client) => {
  const registerCommands = require('./01registerCommands.js'); 

  client.once('ready', async () => {
    console.log(`${client.user.tag} is online.`);
    
    await registerCommands(client);
  });  
   
  console.log(`${client.user.tag} is online.`);
};
