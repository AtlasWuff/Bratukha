module.exports = {
    name: 'notban',
    aliases: ['notb'],
    category: 'Dead',
    utilisation: '{prefix}ban',

    execute(client, message, args) {
        let msgMention = message.mentions.members.first();
        //msgMention.send('L, cry, bozo, ratio, fatherless')
        try {
           msgMention.ban() 
        } catch (error) {
            message.channel.send(`I can't ban them`)
        }
        
    },
};
