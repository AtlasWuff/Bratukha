module.exports = {
    name: 'whatdidusay',
    aliases: ['wdus', 'excuseme', 'what'],
    category: 'Funny',
    utilisation: '{prefix}whatdidusay',

    execute(client, message) {

        function ranHex() {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return n.slice(0, 6);
        };

        message.channel.send({
                embed: {
                    title: 'What did you just say...',
                    color: ranHex(),
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/894669724305215509/917217477266645012/excuseme.gif'
                    },
                },
            });
    },
};