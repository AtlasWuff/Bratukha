const { Guild } = require("discord.js");

const discordIds = ['852701562400276490', '267088517216075776', '539918706164236288', '229635548082470912', '758471171443785780', '431607973672910849']

module.exports = {
    name: 'possiblyshutupcommand',
    aliases: ['possiblyshutupcmd', 'possiblyshut'],
    category: 'Dead',
    utilisation: '{prefix}notshutup',

    execute(client, message, args) {
        const randomElement = discordIds[Math.floor(Math.random() * discordIds.length)];
        var msgArgs = message.content.slice(this.name.length + 1)
        var msgArgs = msgArgs.substring(1);
        let msgMention = message.mentions.members.first();
        let server = message.guild.id
        if (message.author.id != '539918706164236288'){
            if (message.guild.me.permissions.has('SEND_MESSAGES')){
                if (!msgArgs){
                            message.channel.send('https://media.discordapp.net/attachments/789893578016161795/906634022136975391/caption.gif');
                        } else {
                            message.channel.send('https://media.discordapp.net/attachments/789893578016161795/906634022136975391/caption.gif');
                            message.channel.send(`<@${msgArgs}>`).then(msg => {msg.delete({ timeout: 200 })})
                        }
            } else {
                message.author.send("Bro, I'm muted")
            }
        }
        
        
    },
};
