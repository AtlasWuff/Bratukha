module.exports = {
    name: 'skip',
    aliases: ['next'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`How are you going to hear me in a different VC?!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Nothing is playing :upside_down:`);

        if (message.author.id != '539918706164236288');

        const success = client.player.skip(message);

        if (success) message.channel.send(`skipped`);
    },
};