module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        
        //if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`How are you going to hear me in a different VC?!`);

        if (!args[0]) return message.channel.send(`Thats not a title, so give me one`);

        if (message.author.id == '539918706164236288') return;

        client.player.play(message, args.join(" "), { firstResult: true });
        
        const channel = message.member.voice.channel;

        channel.join().then(connection => {
            connection.voice.setSelfDeaf(false);
        });

    },
};