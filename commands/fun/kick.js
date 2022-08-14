module.exports = {
    name: 'notkick',
    aliases: ['notk', 'notkic', 'notkik'],
    category: 'Dead',
    utilisation: '{prefix}kick',

    execute(client, message, args) {
        let msgMention = message.mentions.members.first();

        try {
            msgMention.kick()
        } catch (error) {
            message.channel.send(`I can't ban them`)
        }
    },
};
