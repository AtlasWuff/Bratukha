module.exports = {
    name: 'join',
    aliases: [],
    category: 'Dead',
    utilisation: '{prefix}join',

    execute(client, message, args) {
        const channel = message.member.voice.channel;

        channel.join()
    },
};
