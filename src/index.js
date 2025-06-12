const {Client, IntentsBitField} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log(`the bot ${c.user.tag} is online`)
})

client.on('messageCreate', (msg) => {
    console.log(`${msg.member.displayName}: ${msg.content}`)
})

client.login("MTIyMzQxNTAwMDQ4MDM1NDQzNQ.GdZ8oP.fhiMUycu-s0SDKWbY5P7aYN3G3dsBOmCwJ-G9c")