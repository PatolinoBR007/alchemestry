const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus} = require('@discordjs/voice')

module.exports = {
    name: 'play',
    description: 'Toca uma musica',
    callback : (client, interaction)=>{

        const voiceChannel = interaction.member.voice.channel

        // const conection = joinVoiceChannel({

        // })

        interaction.reply({
            content: 'yeah'
        })
    }
}