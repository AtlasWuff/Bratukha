module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Hey retard you're not in a vc`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - How are you going hear me in a different VC?`);

        if (!client.player.getQueue(message)) return message.channel.send(`Nothing is playing`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`It's already playing`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.player.getQueue(message).playing.title} is now playing once again`);
    },
};