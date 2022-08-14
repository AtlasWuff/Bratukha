module.exports = {
    name: 'floppa',
    aliases: ['flop', 'fp'],
    category: 'Funny',
    utilisation: '{prefix}floppa',

    execute(client, message, args) {
        message.channel.send({
                embed: {
                    title: 'FLOPPA',
                    color: 'd2c268',
                    image: {
                        url: 'https://c.tenor.com/epTbXVRVM44AAAAC/floppa-bingus.gif'
                    },
                },
            });
    },
};
