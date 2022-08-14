module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - How are you going to hear me in a different VC?!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nothing is playing :upside_down:`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`not looping`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`looping`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`not looping`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`looping`);
            };
        };
    },
};