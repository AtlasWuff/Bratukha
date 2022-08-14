module.exports = {
    name: 'pronouns',
    aliases: ['pn', 'pro', 'pns', 'pronoun'],
    category: 'Funny',
    utilisation: '{prefix}pronouns',

    execute(client, message, args) {
        message.channel.send({
                embed: {
                    title: 'Pronouns',
                    color: 'e958d7',
                    description: '🏳️‍⚧️💞💚Dre/Drem💚💗:flag_de:',
                    footer: {
                        text: 'I love dream',
                        icon_url: 'https://cdn.discordapp.com/attachments/894669724305215509/895109101124730950/cAS9tujmipWQyBzaIw5Gic_9axZDXQS2e-6f6K_3eMJT38AeL7xuosaLTCHkoesIgFpRaCNqlCSlI9DQPyON7WztEDOubo8etkM.png'
                    },
                },
            });
    },
};
