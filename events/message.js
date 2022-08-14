module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.author.id == "539918706164236288" || message.author.id == "516404096412942376" ) return;
    let messageArray = message.content.toLowerCase().split(' ')
    if (message.channel.type === 'dm' && message.author.id != '539918706164236288' && (message.content.includes('cdn.discordapp.com') || message.content.includes('tenor.com') || message.content.includes('media.discordapp.net/attachments') || message.content.includes('discord'))){

        // 6f0cd648-5417-45a3-b293-21d933855420

        const fetch = require('node-fetch')
        const express = require('express')
        const https = require('https')
        var msgArgs = message.author

        var storUrl = 'https://getpantry.cloud/apiv1/pantry/6f0cd648-5417-45a3-b293-21d933855420/basket/BratukhaMan'
        var endpoint = '/apiv1/pantry/6f0cd648-5417-45a3-b293-21d933855420/basket/BratukhaMan'

        var data = fetch(storUrl, {
            headers: {
                "X-Master-Key": `$2b$10$GM3yaMXOE2vHmqRytzwjuulBQUnr706i5xOoGoJteCqbQ6vRiXeaq`
            }
        }).then(data => data.json()).then(json => {
            //console.log(json)
            var oldList = json.dmClass.dmItems
            var dupeBool = null

            oldList.forEach(element => {
                if (element == message.content){
                    dupeBool = true
                }
            })
            if (!dupeBool) {
                var newList = oldList
                newList.push(message.content)


                const options = {
                    hostname: 'getpantry.cloud',
                    path: endpoint,
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    dataType: "JSON"
                }
        
                const req = https.request(options, res => {
                    console.log(`statusCode: ${res.statusCode}`)
                })        
                //console.log(newList)

                var elementthing = []

                newList.forEach(element => {
                    elementthing.push(`"${element}"`)
                })

                var Attachment = (message.attachments).array();
                //console.log(Attachment)
                if (Attachment.length != 0) {
                    var attUrl = Attachment[0].url
                    var newUrl = attUrl
                } else {
                    var newUrl = message.content
                }
                console.log(newUrl)
                


                setTimeout(function(){
                    var joined = elementthing.join(',')
                    //console.log(joined)

                    req.write(`{
                        "dmClass": {
                            "dmItems": ["${newUrl}"]
                        }
                    }`)
                    req.end()
                    /*fetch(storUrl).then(data => data.json()).then(json => {
                        console.log(json)
                    })*/
                    console.log(`${message.author.username} - ${message.content}`)
                    message.channel.send({
                        embed: {
                            description: `File successfully added: ${newUrl}`,
                            color: 'b00b69',
                            footer: {
                                text: 'Run -randomdm to use the added files'
                                //iconurl: message.author.user.
                            }
                        },
                    })
                    client.channels.cache.get(`932430818465419324`).send({
                        embed: {
                            fields: [
                                {name: 'Author', value: `<@${message.author.id}>`, inline: true},
                            ],
                            color: `B00B69`,
                            timestamp: new Date(message.createdTimestamp).getTime()
                        }
                    })
                    client.channels.cache.get(`932430818465419324`).send(newUrl)
                },500);
            } else {
                message.channel.send({
                    embed: {
                        description: `File failed adding: The sent file was already sent to the bot`,
                        color: 'b00b69',
                    },                
                })
            }
            
        })
    } else {
        if (message.channel.type == 'dm'){
            message.channel.send({
                embed: {
                    description: `File failed adding: The sent file was not a video, gif, or image from Discord or Tenor`,
                    color: 'b00b69',
                    footer: {
                        text: `Try copying and sending the attachment link`
                    }
                },                
            })
        }
        var prefix = client.config.discord.prefix

        const fs = require("fs");
        const answerText = fs.readFileSync(`answers.js`)
        let answersArray = answerText.toString().split(`","`)
        answersArray[0] = answersArray[0].replace(`"`, '')
        let startingAnswer = answersArray.splice(answersArray.indexOf('today'))

        var date1 = new Date("03/12/2022");
        var today = new Date()
        var date = (today.getMonth()+1) + '/' + (today.getDate()) + '/' + today.getFullYear()
       
        var date2 = new Date(date);
        console.log(date1 + `\n` + date2)
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24))
        
        console.log(Difference_In_Days)
        var todaysWordleAnswer = startingAnswer[Difference_In_Days + 1]
        console.log(todaysWordleAnswer)

        if (message.content.toLowerCase().includes(todaysWordleAnswer)){
            message.channel.send(`_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _`)
            message.channel.send({ 
                embed: {
                    description: `Caution: The message above contains today's wordle anwer!`,
                    color: 'ff151c'
                },
                
            })
        }

        if (message.content.split('')[0] == prefix){
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

            if (cmd) cmd.execute(client, message, args);
        }
    }
};
