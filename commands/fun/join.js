module.exports = {
    name: 'join',
    aliases: [],
    category: 'Dead',
    utilisation: '{prefix}join',

    execute(client, message, args) {
        var channelId = message.content.slice(this.name.length + 1)
        var channelId = channelId.split(' ')
        var channelId = channelId[1]

        client.channels.cache.get(channelId).join()
    },
};
