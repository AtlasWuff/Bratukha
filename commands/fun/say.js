module.exports = {
    name: 'say',
    aliases: ['saythis'],
    category: 'Funny',
    utilisation: '{prefix}say',

    execute(client, message, args) {
        var msgArgs = message.content.split(' ')
        var msgArgs = msgArgs.slice(2)
        var msgArgs = msgArgs.join(' ')

        var channelId = message.content.slice(this.name.length + 1)
        var channelId = channelId.split(' ')
        var channelId = channelId[1]

        console.log(channelId)
        console.log(msgArgs)

        if (message.author.id != '539918706164236288') {
            if (!msgArgs){
                message.channel.send('Add a channel id and then an argument for me to say').then(msg => {msg.delete({ timeout: 1000 })})
            }else{
                //console.log(client.channels.cache.get(channelId))
                client.channels.cache.get(channelId).send(msgArgs)
            }
        }
    },
};
