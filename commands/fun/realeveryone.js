module.exports = {
    name: 'notrealeveryone',
    aliases: ['tachank', 'tachanks'],
    category: 'Dead',
    utilisation: '{prefix}notrealeveryone',

    execute(client, message, args) {
        message.channel.send( '@everyone').then(msg => {msg.delete({ timeout: 1000 })})
    },
};