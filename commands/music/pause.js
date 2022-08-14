module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`How are you going to hear me in a different VC?!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Nothing is playing :upside_down:`);

        if (client.player.getQueue(message).paused) return message.channel.send(`Its already paused :neutral_face:`);
        
        if (message.author.id != '539918706164236288');

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - **${client.player.getQueue(message).playing.title}** is now paused so u can talk to ur mom in peace`);
    },
};