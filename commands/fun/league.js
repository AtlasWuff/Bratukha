const { Client, Intents } = require('discord.js');
const proBar = require('string-progressbar');
const image_finder = require('image-search-engine')

module.exports = {
    name: 'league',
    aliases: ['lol', 'leagueoflegends'],
    category: 'Funny',
    utilisation: '{prefix}league',

    async execute(client, message, guild) {
        //console.log(message.mentions.members.first())
        if (typeof message.mentions.members.first() != "undefined") {
            const msgArgs = message.content.slice(this.name.length + 1)
            let msgMention = message.mentions.members.first() || client.users.cache.find(user => user.id === msgArgs)
            let avatarThing = message.mentions.users.first()

            if (!msgMention.user.bot){
                let mp = msgMention.presence.activities
                //console.log(mp)

                function getLength(number){
                    return number.toString().length;
                }

                var ifStatus = mp.filter(game => game.type == 'PLAYING' || 'LISTENING')

                if (msgMention.presence.status == 'online' || 'idle' || 'dnd'){
                    if (typeof ifStatus[0] !== "undefined") {
                        //console.log(mp)
                        //console.log(mp.filter(game => game.name == 'Spotify').indexOf())

                        //console.log(mp)
                        
                        var spotTest = mp.filter(game => game.name == 'Spotify')
                        var legTest = mp.filter(game => game.name == 'League of Legends')
                        var scpTest = mp.filter(game => game.name == 'SCP: Secret Laboratory')
                        var elseTest1 = mp.filter(game => game.name != 'Spotify' )
                        var elseTest2 = elseTest1.filter(game => game.name != 'League of Legends')
                        var elseTest3 = elseTest2.filter(game => game.name != 'SCP: Secret Laboratory')

                        console.log(spotTest)

                        function ranHex() {
                            let n = (Math.random() * 0xfffff * 1000000).toString(16);
                            return n.slice(0, 6);
                        };

                        async function elseFunction(leg){
                            if (typeof elseTest3[elseTest3.indexOf(leg)] !== "undefined") {
                                console.log(elseTest3[elseTest3.indexOf(leg)])
                                if (elseTest3[elseTest3.indexOf(leg)].name != 'Custom Status') {
                                    if (leg.timestamps){
                                        const n = new Date();
                                        console.log(n)
                                        const g = leg.timestamps.start;
                                        if (g <= 0) {
                                            return;
                                        }
                                        var hours = Math.abs(n - g) / 36e5;
                                        var testMin = hours.toFixed(2)
                                        var minutes = Math.round(testMin*60)
                                    } else {
                                        var minutes = ('(I have no clue, your game has no time for me to get)')
                                    }
                                    
                                    console.log(leg)
                                    //message.channel.send(`**${msgMention.displayName}** has been playing **${leg.name}** for **${minutes}** minutes`);
                                    //async function  printUrl(query){
                                        //message.channel.send(await image_finder.find(query + " Logo"))
                                    //}
                                    //printUrl(leg.name)
                                    //if (minutes >= 60){
                                        //message.channel.send(`And it's over one hour too, go see a therapist`)
                                    //}

                                    var img = await printUrl(leg.name)
                                    console.log(img)

                                    async function  printUrl(query){
                                        var imageUrl = await image_finder.find(query + ' Logo')
                                        return imageUrl
                                    }

                                    message.channel.send({
                                        embed: {
                                            color: ranHex(),
                                            title: leg.name,
                                            fields: [
                                                {name: 'Time Elapsed', value: `${minutes} minutes`, inline: true},
                                            ],
                                            thumbnail: {
                                                url: img
                                            },
                                            footer: {
                                                text: msgMention.displayName,
                                                icon_url: avatarThing.avatarURL({ dynamic: true }),
                                            },
                                            //timestamp: new Date(message.createdTimestamp).getTime()
                                        },
                                    });
        
                                }
                            }
                        }
                        //console.log(spottest)

                        if (typeof spotTest[0] !== "undefined"){
                            let leg = spotTest[0]
                            //let mp = msgMention.presence.activities[0]
                            if (leg.assets){
                                var imgvar = leg.assets.largeImage
                                var imgvar = imgvar.replace('spotify:','')
                                var startDate = leg.timestamps.start.getTime()
                                //console.log(startDate)
                                var endDate   = leg.timestamps.end.getTime()
                                var progressEnd = (endDate - startDate) / 1000;
                                //console.log(progressEnd)
                                var minutes = Math.floor((progressEnd/60))
                                var seconds = Math.floor(progressEnd - (minutes*60))
                                if (getLength(seconds) == 1){
                                    var seconds = '0' + seconds
                                } 
                                var smCombined = `${minutes}:${seconds}`
                                //console.log(smCombined)

                                var album = leg.assets.largeText
                            } else {
                                var smCombined = `(Don't have a clue)`
                                var album = `(Isnt shown on you're profile so im useless)`
                                var imgvar = ''
                            }
                            

                            message.channel.send({
                                embed: {
                                    color: '1DB954',
                                    title: `${leg.name}`,
                                    description: `**Song - ${leg.details}**`,
                                    fields: [
                                        { name: 'Artist', value: leg.state, inline: true},
                                        { name: 'Album', value: album, inline: true},
                                        { name: 'Length', value: smCombined, inline: true}
                                        
                                    ],
                                    thumbnail: {
                                        url: `https://i.scdn.co/image/${imgvar}` || ''
                                    },
                                    footer: {
                                        text: msgMention.displayName,
                                        icon_url: avatarThing.avatarURL({ dynamic: true }),
                                    },
                                    //timestamp: new Date(message.createdTimestamp).getTime()
                                    
                                },
                            });
                        } 
                        //console.log(msgMention.presence.activities.filter(x => x.name == 'League of Legends') != [])
                        if (typeof legTest[0] !== "undefined") {
                            let leg = legTest[0]
                            if (leg.timestamps){
                                const n = new Date();
                                //console.log(n)
                                const g = leg.timestamps.start;
                                if (g <= 0) {
                                    return;
                                }
                                var hours = Math.abs(n - g) / 36e5;
                                var testMin = hours.toFixed(2)
                                var minutes = Math.round(testMin*60)
                            } else {
                                var minutes = ('I have no clue, your game has no time for me to get')
                            }

                            if (leg.assets){
                                var char = leg.assets.largeText
                                var img = await printUrl(char + ' league of legends')
                            } else{
                                var char = `IDK, u dont have a picture to read`
                                var img = await printUrl('League of Legends logo')
                            }

                            //message.channel.send(`${msgMention.displayName} has been wasting his life playing ${leg.name} as ${char}, whoever tf that is, for ${minutes} minutes, this can be inferred that ${msgMention.displayName}'s brain is deteriorating at a rapid rate and must have action taken immeditely. Please call 800-273-8255 ASAP for assistance`);
                            //if (minutes >= 60){
                                //message.channel.send(`And it's over one hour too, go see a neurosurgeon`)
                            //}
                            async function  printUrl(query){
                                var imageUrl = await image_finder.find(query + ' Logo')
                                return imageUrl
                            }

                            message.channel.send({
                                embed: {
                                    color: ranHex(),
                                    description: `**WARNING:** ${msgMention.displayName} is currently wasting valuable time in their life and is slowly degrading every last bit of their sanity. Take action by calling the number below immediately!`,
                                    title: leg.name,
                                    fields: [
                                        {name: 'Character', value: char, inline: true},
                                        {name: 'Time Elapsed', value: minutes + ' minutes', inline: true}
                                    ],
                                    thumbnail: {
                                        url: img
                                    },
                                    footer: {
                                        text: `Call **800-273-8255** ASAP`,
                                        icon_url: avatarThing.avatarURL({ dynamic: true }),
                                    },
                                    //timestamp: new Date(message.createdTimestamp).getTime()
                                    
                                },
                            });
                        } 
                        if (typeof scpTest[0] !== "undefined") {
                            let leg = scpTest[0]
                            if (leg.timestamps){
                                const n = new Date();
                                //console.log(n)
                                const g = leg.timestamps.start;
                                if (g <= 0) {
                                    return;
                                }
                                var hours = Math.abs(n - g) / 36e5;
                                var testMin = hours.toFixed(2)
                                var minutes = Math.round(testMin*60)
                            } else {
                                var minutes = ('(I have no clue, your game has no time for me to get)')
                            }

                            //message.channel.send(`**${msgMention.displayName}** has been playing **${leg.name}** as **${leg.state}** for **${minutes}** minute(s) in a match`);
                            //if (minutes >= 60){
                                //message.channel.send(`And it's over one hour too, go see a therapist`)
                            //}
                            async function  printUrl(query){
                                var imageUrl = await image_finder.find(query)
                                return imageUrl
                            }

                            if (leg.state == 'Waiting for match...' || leg.state == 'Main Menu'){
                                var char = '*Currently not playing*'
                                var img = await printUrl(`SCP Secret Laboratory logo`)
                            } else {
                                var char = leg.state
                                var img = await printUrl(`${char}`)
                            }

                            console.log(await printUrl(leg.name))

                            message.channel.send({
                                embed: {
                                    color: ranHex(),
                                    title: leg.name,
                                    fields: [
                                        {name: 'Role', value: char, inline: true},
                                        {name: 'Time Elapsed', value: `${minutes} minutes`, inline: true}
                                    ],
                                    thumbnail: {
                                        url: img
                                    },
                                    footer: {
                                        text: msgMention.displayName,
                                        icon_url: avatarThing.avatarURL({ dynamic: true }),
                                    },
                                    //timestamp: new Date(message.createdTimestamp).getTime()
                                },
                            });
                        }

                        console.log(elseTest3)

                        elseTest3.forEach(elementElse => elseFunction(elementElse))
                        
                    } else {
                        message.channel.send('They dont have a game status, stop trying to crash the bot')
                    }
                }
            } else {
                message.channel.send('Thats a bot')
            }
        } else {
            message.channel.send('You gotta mention someone dumbass')
        }
    }
}