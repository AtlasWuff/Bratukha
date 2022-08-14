module.exports = {
    name: 'hack',
    aliases: ['ip','nerd'],
    category: 'Funny',
    utilisation: '{prefix}hack',

    execute(client, message, args) {
        let msgMention = message.mentions.members.first()
        message.channel.send({
            embed: {
                description: `Hacking into mainframe...`,
                color: `0fc42f`
            }
            }).then(msg => {
            function editThing(time, descriptionText, image) {
                var time = time * 1000
                setTimeout(function(){
                    msg.edit({
                        embed: {
                            description: `${descriptionText}`,
                            color: `16cb3f`,
                            image: {
                                url: `${image}`
                            }
                        },
                    })
                },time);
            }
            editThing(1,`Accessing Proxy...`,'')
            editThing(2,`Communicating with root servers..`,'')
            editThing(3,`Connection Established`,'')
            editThing(4,`Bypassing Discord Firewall...`,'')
            editThing(5,`Beginning Data Transfer...`,'')
            editThing(6,`0%`,'')
            editThing(7,`20%`,'')
            editThing(8,`40%`,'')
            editThing(9,`60%`,'')
            editThing(10,`80%`,'')
            editThing(12,`100%`,'')
            editThing(13,`Data Transfer Completed...`,'')
            editThing(14,`Sending Data...`,'')
            editThing(15,`<@${msgMention.id}>`,'https://cdn.discordapp.com/attachments/894669724305215509/931327445200683018/caption.gif')
        })       
    },
};
