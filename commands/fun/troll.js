module.exports = {
    name: 'troll',
    aliases: ['tr', 'trl'],
    category: 'Funny',
    utilisation: '{prefix}troll',

    execute(client, message, args) {
        message.channel.send({
                embed: {
                    title: 'Gte trolerd',
                    color: 'FFFFFF',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/894669724305215509/897211501549604864/image0.gif'
                    },
                },
            });
    },
};
