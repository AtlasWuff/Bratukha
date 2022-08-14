module.exports = {
    name: 'saychan',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}delete',

    async execute(client, message, args) {
        let arg = args.join(' ')
        message.channel.send(arg)
    },
};
