module.exports = {
    name: 'othereveryone',
    aliases: [],
    category: 'Dead',
    utilisation: '{prefix}otherrealeveryone',

    execute(client, message, args) {
        var msgArgs = message.content.split(' ')
        var msgArgs = msgArgs.slice(2)
        var msgArgs = msgArgs.join(' ')

        var channelId = message.content.slice(this.name.length + 1)
        var channelId = channelId.split(' ')
        var channelId = channelId[1]

        console.log(channelId)
        console.log(msgArgs)

            function editThing() {
                client.channels.cache.get(channelId).send(`@everyone`)
            }
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()
            editThing()      
    },
};
