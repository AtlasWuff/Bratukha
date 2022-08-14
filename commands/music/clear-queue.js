module.exports = {
    name: 'clear',
    aliases: ['clearqueue'],
    category: 'Music',
    utilisation: '{prefix}clear',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - How are you going to hear me in a different VC?!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - There is no music playing big brain`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Queue variable = 1 song ERROR YOU FU...`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Cleared the queue since ur a picky bitch`);
    },
};