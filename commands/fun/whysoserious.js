module.exports = {
    name: 'whysoserious',
    aliases: ['wss', 'why'],
    category: 'Funny',
    utilisation: '{prefix}whysoserious',

    execute(client, message, args) {
        if (message.author.id != '539918706164236288'){
            message.channel.send('https://cdn.discordapp.com/attachments/680874141074718778/894069918767665216/kylerjokerwww.mp4');
            message.channel.send(':clown:')
        }
        
    },
};
