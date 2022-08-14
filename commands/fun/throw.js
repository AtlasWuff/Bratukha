module.exports = {
    name: 'throw',
    aliases: ['th'],
    category: 'Dead',
    utilisation: '{prefix}throw',

    execute(client, message, args) {
        var msgMention = message.mentions.members.first()
        console.log(msgMention)
        //var msgMention = msgMention.replace('')

        var prompts = [`Pow, right in the kisser! ${msgMention} got slugged by a snowball.`, `Sound the trumpets of war (doot doot)—the reckoning has begun. ${msgMention} got hit with a snowball!`]
        const randomElement = prompts[Math.floor(Math.random() * prompts.length)];

        if (msgMention);

        setTimeout(function(){ 
            message.channel.send({
                embed: {
                    description: randomElement,
                    color: '68f768',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/894669724305215509/918647289956945970/unknown.png'
                    },
                },
            });
        }, 1000);
        
    },
};
