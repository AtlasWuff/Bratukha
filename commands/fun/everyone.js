module.exports = {
    name: 'everyone',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}everyone',

    execute(client, message) {
        var msgArgs = message.content.slice(this.name.length + 1)

        message.channel.send({
                embed: {
                    color: 'c20d00',
                    description: '@everyone',
                },
        });
        if(msgArgs){
            message.channel.send(msgArgs)
        }
    },
};