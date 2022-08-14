module.exports = {
    name: 'hitate',
    aliases: ['tatehi'],
    category: 'Funny',
    utilisation: '{prefix}hitate',

    execute(client, message) {
        if (message.author.id != '539918706164236288'){
            message.channel.messages.fetch("905258511972311050")
            .then(message => message.lineReply('https://cdn.discordapp.com/attachments/745075250148016158/915749823859286056/image_1.png'))
        }
    },
};