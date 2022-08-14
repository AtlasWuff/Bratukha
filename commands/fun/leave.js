module.exports = {
    name: 'leave',
    aliases: [],
    category: 'Dead',
    utilisation: '{prefix}leave',

    execute(client, message, args) {
        const channel = message.member.voice.channel;

        channel.leave()
    },
};
