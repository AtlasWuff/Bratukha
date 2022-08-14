module.exports = {
    name: 'deleteratios',
    aliases: [],
    category: 'Dead',
    utilisation: '{prefix}ban',

    async execute(client, message, args) {
        if (message.author.id == '484343723426054150') {
            channels = await message.guild.channels.cache
            console.log(channels)
            channels.forEach(element => {
                if (element.type == 'text' && element.name == 'ratio') {
                    element.delete()
                }
            })
        }
    },
};
