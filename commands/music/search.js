module.exports = {
    name: 'search',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Hey retard ur not in a VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - How are you going to hear me in a different VC?!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Thats not a title, so give me one`);

        if (message.author.id != '539918706164236288');

        client.player.play(message, args.join(" "));
    },
};