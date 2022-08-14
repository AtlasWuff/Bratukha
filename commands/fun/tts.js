module.exports = {
    name: 'tts',
    aliases: ['texttospeech'],
    category: 'Funny',
    utilisation: '{prefix}tts',

    execute(client, message, args) {
        if (isNaN(message.content.split(' ')[1])) {
            var channelId = message.channel.id

            var msgArgs = message.content.split(' ')
            var msgArgs = msgArgs.slice(1)
            var msgArgs = msgArgs.join(' ')
        } else {
            var channelId = message.content.split(' ')[1]
            var msgArgs = message.content.split(' ')
            var msgArgs = msgArgs.slice(2)
            var msgArgs = msgArgs.join(' ')
        }

        var Attachment = (message.attachments).array();
        if (Attachment.length != 0) {
            var url = Attachment[0].url
        } else {
            var url = ``
        }

        if (message.author.id != '539918706164236288') {
            if (!channelId){
                message.channel.send('Add a channel id and/or then an argument for me to say').then(msg => {msg.delete({ timeout: 1000 })})
            }else{
                if (message.guild.me.permissions.has('SEND_MESSAGES')){
                    client.channels.cache.get(channelId).send(`${msgArgs} ${url}`, {
                        tts: true
                    })
                } else {
                    message.author.send(`${msgArgs} ${url}`, {
                        tts: true
                    })
                }
                //console.log(client.channels.cache.get(channelId))
                
            }
        }
    },
};
