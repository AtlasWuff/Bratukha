module.exports = {
    name: 'reverse',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}reverse',

    execute(client, message, args) {
        var msgArgs = message.content.slice(this.name.length + 1).toLowerCase()

        var msgArgs = msgArgs.split('')
        var msgArgs = msgArgs.reverse()
        var msgArgs = msgArgs.join('')
        
        message.channel.send(msgArgs)
    },
};
