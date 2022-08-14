module.exports = {
    name: 'stop',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - How are you going to hear me in a different VC?!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nothing is playing`);

        if (message.author.id != '539918706164236288');

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} - I stopped the music since u forgot your bluetooth speaker was on`);
    },
};