module.exports = {
    name: 'cooper',
    aliases: ['coop', 'cp'],
    category: 'Funny',
    utilisation: '{prefix}cooper',

    execute(client, message) {
        message.channel.send({
                embed: {
                    title: 'COOPER',
                    color: '000000',
                    image: {
                        url: 'https://media.discordapp.net/attachments/799144307255803955/892937679723962428/image0.gif'
                    },
                },
            });
    },
};