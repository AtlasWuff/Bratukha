module.exports = {
    name: 'spoingus',
    aliases: ['spoin', 'spoingol'],
    category: 'Funny',
    utilisation: '{prefix}spoingus',

    execute(client, message, args) {
        message.channel.send({
                embed: {
                    title: 'SPOINGUS',
                    color: 'b00b69',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/894669724305215509/916543269628940328/spoingus-pass_2.gif'
                    },
                },
            });
    },
};
