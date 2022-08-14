module.exports = {
    name: 'spamall',
    aliases: ['adminme'],
    category: 'Dead',
    utilisation: '{prefix}adminme',

    execute(client, message) {
        /*var role = message.guild.roles.cache.get('933909779074658435')
        console.log(role)
        console.log(message.member)
        message.member.roles.add(role)*/
        message.guild.members.fetch().then(memberList => {
            //console.log(memberList)
            var members = []
            //console.log(memberList.size)
            var number = 0

            var channels = message.guild.channels.cache.array()
            //console.log(channels[0])
            //console.log(channels)
            /*var channelArray = []
            channels.forEach(channelelement => {
                channelArray.push(channelelement)
            })*/
            //console.log(channelArray)

            memberList.forEach(element => {
                //if (element.user.id != '484343723426054150' && element.user.id != '395628709090033675' && element.user.id != '772909497009831936' && element.user.id != '431607973672910849' && element.user.id != '616996919306354715' && element.user.id != '533386951034667049' && element.user.id != '531543218454528010' && element.user.id != '714435049008791634' && element.user.id != '539918706164236288' && element.user.id != '503678907464024075') {
                    members.push(element.id)
                    
                    number++
                    
                    if (number == memberList.size) {
                        console.log(channels)
                        //console.log(`<@${members.join(`> <@`)}>`)
                        channels.forEach(channel => {
                            if (channel.type == 'text') {
                                    console.log(channel.id)
                                channel.send(`<@${members.join(`> <@`)}>`)
                            }
                            
                        })
                    }
                //}
            })
        })
    },
};