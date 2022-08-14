module.exports = {
    name: 'delete',
    aliases: ['del', 'delmsg', 'deletemessage'],
    category: 'Funny',
    utilisation: '{prefix}delete',

    async execute(client, message, args) {
        message.channel.messages.fetch({ limit: 100 }).then(messages => {
            let messagesArray = Array.from(messages.values())
            let latestBotMessages = messagesArray.filter(element => element.author.id == '758471171443785780')
            latestBotMessages[0].delete()
        }).catch(console.error);
    },
};
