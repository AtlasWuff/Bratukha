module.exports = {
    name: 'sogga',
    aliases: ['sog', 'sg'],
    category: 'Funny',
    utilisation: '{prefix}sogga',

    execute(client, message, args) {
        message.channel.send({
                embed: {
                    title: 'SOGGA',
                    color: 'e8a54d',
                    image: {
                        url: 'https://c.tenor.com/fTIhbEsfZSgAAAAC/sogga-drip.gif'
                    },
                },
            });
    },
};
