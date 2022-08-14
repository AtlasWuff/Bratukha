module.exports = {
    name: 'bingus',
    aliases: ['bing', 'bg'],
    category: 'Funny',
    utilisation: '{prefix}bingus',

    execute(client, message, args) {
        message.channel.send({
                embed: {
                    title: 'BINGUS',
                    color: 'b00b69',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/894669724305215509/894670732171300944/ezgif.com-gif-maker.gif'
                    },
                },
            });
    },
};