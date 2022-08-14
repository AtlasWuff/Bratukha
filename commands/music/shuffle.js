module.exports = {
    name: 'shuffle',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - How are you going to hear me in a different VC?!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nothing is playing :upside_down:`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - I shuffled the queue with this much "**${client.player.getQueue(message).tracks.length}**" in it because you didnt want to hear the upcoming anime moans :stuck_out_tongue_winking_eye:`);
    },
};