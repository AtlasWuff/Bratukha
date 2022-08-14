module.exports = async (client, message) => {
    if (!message.author.bot && message.guild.id != '848957878618685491' && !message.content.includes(`-record`)){
        var Attachment = (message.attachments).array();

        var embedProps = { 
                title: `Someone has no bitches...`,
                //description: `${message.content}`,
                color: `ec040a`,
                footer: {text: `${message.author.username}`,icon_url: `${message.author.avatarURL({ dynamic: true})}`},
                image: {
                    url: `https://cdn.discordapp.com/attachments/894669724305215509/947311064385748992/ezgif.com-gif-maker.gif`
                },
                timestamp: new Date(message.createdTimestamp).getTime()
        }
        /*message.channel.send({
            embed: embedProps
        })*/
        function ranHex() {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return n.slice(0, 6);
        };

        var embedProps = {
            title: 'Message Data',
            fields: [
                {name: 'Channel', value: `<#${message.channel.id}>`, inline: true},
                {name: 'Author', value: `<@${message.author.id}>`, inline: true}
            ],
            thumbnail: {
                url: message.author.avatarURL({ dynamic: true })
            },
            description: message.content,
            color: ranHex(),
            timestamp: new Date(message.createdTimestamp).getTime()
        }
        if (message.content.includes(`tenor.com`) || message.content.includes(`discordapp`) || message.content.includes(`giphy`)) {
            var embedProps = {
                title: 'Message Data',
                fields: [
                    {name: 'Channel', value: `<#${message.channel.id}>`, inline: true},
                    {name: 'Author', value: `<@${message.author.id}>`, inline: true}
                ],
                thumbnail: {
                    url: message.author.avatarURL({ dynamic: true })
                },
                image: {
                    url: message.content
                },
                description: message.content,
                color: ranHex(),
                timestamp: new Date(message.createdTimestamp).getTime()
            }
        }
        if (Attachment.length != 0) {
            var embedProps = {
                title: 'Message Data',
                fields: [
                    {name: 'Channel', value: `<#${message.channel.id}>`, inline: true},
                    {name: 'Author', value: `<@${message.author.id}>`, inline: true}
                ],
                image: {
                    url: Attachment[0].url
                },
                thumbnail: {
                    url: message.author.avatarURL({ dynamic: true })
                },
                description: message.content,
                color: ranHex(),
                timestamp: new Date(message.createdTimestamp).getTime()
            }
        }

        client.channels.cache.get(`932132521951514625`).send({
            embed: embedProps
        })
    }/* else if (message.author.id == 758471171443785780) {
        console.log(message.embeds)
        if (message.embeds.length != 0){
            JSON.stringify(message.embeds[0].footer)
        }

        try {
            if (message.embeds[0].title == `Someone deleted a message...`) {

                if (message.embeds[0].image != null) {
                    var newEmProps = {
                        title: `Someone deleted a message and **you cannot hide it...**`,
                        description: message.embeds[0].description,
                        color: `ec040a`,
                        footer: {
                            text: message.embeds[0].footer.text,
                            icon_url: message.embeds[0].footer.iconURL
                        }, 
                        image: {
                            url: message.embeds[0].image.url
                        },
                        timestamp: new Date(message.createdTimestamp).getTime()
                    }
                } else {
                    var newEmProps = {
                        title: `Someone deleted a message and **you cannot hide it...**`,
                        description: message.embeds[0].description,
                        color: `ec040a`,
                        footer: {
                            text: message.embeds[0].footer.text,
                            icon_url: message.embeds[0].footer.iconURL
                        },
                        timestamp: new Date(message.createdTimestamp).getTime()
                    }
                }

                message.channel.send({
                    embed: newEmProps
                })
            } else if (message.embeds[0].title == `Someone deleted a message and **you cannot hide it...**`){
                if (message.embeds[0].image != null) {
                    var newEmProps = {
                        title: `Come on man, stop deleting me`,
                        description: message.embeds[0].description,
                        color: `ec040a`,
                        footer: {
                            text: message.embeds[0].footer.text,
                            icon_url: message.embeds[0].footer.iconURL
                        }, 
                        image: {
                            url: message.embeds[0].image.url
                        },
                        timestamp: new Date(message.createdTimestamp).getTime()
                    }
                } else {
                    var newEmProps = {
                        title: `Come on man, stop deleting me`,
                        description: message.embeds[0].description,
                        color: `ec040a`,
                        footer: {
                            text: message.embeds[0].footer.text,
                            icon_url: message.embeds[0].footer.iconURL
                        },
                        timestamp: new Date(message.createdTimestamp).getTime()
                    }
                }

                message.channel.send({
                    embed: newEmProps
                })
            } else if (message.embeds[0].title == `Come on man, stop deleting me`) {
                if (message.embeds[0].image != null) {
                    var newEmProps = {
                        title: `Yeah, look, I'm tried so just leave this message only, I'm not doing this anymore`,
                        description: message.embeds[0].description,
                        color: `ec040a`,
                        footer: {
                            text: message.embeds[0].footer.text,
                            icon_url: message.embeds[0].footer.iconURL
                        }, 
                        image: {
                            url: message.embeds[0].image.url
                        },
                        timestamp: new Date(message.createdTimestamp).getTime()
                    }
                } else {
                    var newEmProps = {
                        title: `Yeah, look, I'm tired so just leave this message alone, I'm not doing this anymore`,
                        description: message.embeds[0].description,
                        color: `ec040a`,
                        footer: {
                            text: message.embeds[0].footer.text,
                            icon_url: message.embeds[0].footer.iconURL
                        },
                        timestamp: new Date(message.createdTimestamp).getTime()
                    }
                }

                message.channel.send({
                    embed: newEmProps
                })
            } else {
                message.channel.send('Stupid admin men deleting my messages :angry:\n\n-ban @admin')
            }       
        } catch (error) {
            console.log(error.message)
        }
    }*/
}
