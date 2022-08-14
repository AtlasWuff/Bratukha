module.exports = {
    name: 'spammydms',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}spammydms',

    execute(client, message, args) {
        var repeat = 0
        console.log
        message.channel.send('Trolled')
        console.log('sapmmed')
        do {
            message.author.send('https://cdn.discordapp.com/attachments/745075250148016158/851507197765615626/image0.jpg')
            repeat++
        } while (repeat < 1001)
    },
};
