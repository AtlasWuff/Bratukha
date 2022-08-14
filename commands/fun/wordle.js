const fs = require("fs");
module.exports = {
    name: 'wordlehint',
    aliases: ['wordle'],
    category: 'Funny',
    utilisation: '{prefix}wordlehint',

    async execute(client, message) {
        
        const answerText = fs.readFileSync(`answers.js`)
        let answersArray = answerText.toString().split(`","`)
        answersArray[0] = answersArray[0].replace(`"`, '')
        let startingAnswer = answersArray.splice(answersArray.indexOf('today'))

        var date1 = new Date("03/12/2022");
        var today = new Date()
        var date = (today.getMonth()+1) + '/' + (today.getDate()) + '/' + today.getFullYear()
        var date2 = new Date(date);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Math.floor(Difference_In_Time / ((1000 * 60 * 60) * 24));
        console.log('Thing ' + Difference_In_Days)
        
        var todaysAnswer = startingAnswer[Difference_In_Days + 1]

        var ogsplitAnswer = todaysAnswer.split('')
        var splitAnswer = todaysAnswer.split('')

        function ranElement(){
            console.log(ogsplitAnswer)
            var ranValue = splitAnswer[Math.floor(Math.random() * splitAnswer.length)];
            splitAnswer.splice(splitAnswer.indexOf(ranValue), 1)
            console.log(splitAnswer)
            return ranValue
        }

        var oneLetter = '👯‍♂️'
        var twoLetters = '🙀'
        var threeLetters = '🕴️'
        var fourLetters = '💀'
        var fiveLetters = '🤓'

        var noMoreEmbeds = 0
        var accepting = true

        await message.channel.send({
            embed: {
                description: `**Yellow** or **Green** letters?`,
                color: '6aaa64',
                footer: {
                    text: `Note: If it is past 8pm, this is the next day's answer`
                }
            }
        }).then(msg => {
            msg.react('🟨')
            msg.react('🟩')
        })
        if (noMoreEmbeds == 0) {
            client.on('messageReactionAdd', async (reaction, user) => {
                if (!accepting) return;
                if (reaction.message.partial) await message.reaction.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (user.id != message.author.id) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == message.channel.id) {
                    if (reaction.emoji.name == '🟨') {
                        await message.channel.send({
                            embed: {
                                description: `Choose how many yellow letters you want`,
                                color: 'fdcb58',
                                fields: [
                                    {name: '1 letter', value: oneLetter, inline: true},
                                    {name: '2 letters', value: twoLetters, inline: true},
                                    {name: '3 letters', value: threeLetters, inline: true},
                                    {name: '4 letters', value: fourLetters, inline: true},
                                    {name: '5 letters', value: fiveLetters, inline: true},
                                ],
                            }
                        }).then(msg => {
                            msg.react(oneLetter)
                            msg.react(twoLetters)
                            msg.react(threeLetters)
                            msg.react(fourLetters)
                            msg.react(fiveLetters)
                            var noMore = 0
                            client.on('messageReactionAdd', async (reaction, user) => {
                                if (!accepting) return;
                                if (user.bot) return;
                                if (user.id != message.author.id) return;
                                
                                if (noMore == 0){
                                    if (reaction.emoji.name == oneLetter) {
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                ],
                                                color: 'fdcb58'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == twoLetters) {
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                ],
                                                color: 'fdcb58'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == threeLetters) {
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                ],
                                                color: 'fdcb58'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == fourLetters) {
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                ],
                                                color: 'fdcb58'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == fiveLetters) {
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                    {name: 'Position: **Unknown**', value: ranElement(), inline: true},
                                                ],
                                                color: 'fdcb58'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    accepting = false
                                }
                            })
                        })
                    } else if (reaction.emoji.name == '🟩') {
                        await message.channel.send({
                            embed: {
                                description: `Choose how many green letters you want`,
                                color: '6aaa64',
                                fields: [
                                    {name: '1 letter', value: oneLetter, inline: true},
                                    {name: '2 letters', value: twoLetters, inline: true},
                                    {name: '3 letters', value: threeLetters, inline: true},
                                    {name: '4 letters', value: fourLetters, inline: true},
                                    {name: '5 letters', value: fiveLetters, inline: true},
                                ],
                            }
                        }).then(msg => {
                            msg.react(oneLetter)
                            msg.react(twoLetters)
                            msg.react(threeLetters)
                            msg.react(fourLetters)
                            msg.react(fiveLetters)
                            var noMore = 0
                            client.on('messageReactionAdd', async (reaction, user) => {
                                if (!accepting) return;
                                if (user.bot) return;
                                if (user.id != message.author.id) return;
                                
                                if (noMore == 0){
                                    if (reaction.emoji.name == oneLetter) {
                                        var thing1 = ranElement()
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing1) + 1}`, value: thing1, inline: true},
                                                ],
                                                color: '6aaa64'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == twoLetters) {
                                        var thing1 = ranElement()
                                        var thing2 = ranElement()
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing1) + 1}`, value: thing1, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing2) + 1}`, value: thing2, inline: true},
                                                ],
                                                color: '6aaa64'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == threeLetters) {
                                        var thing1 = ranElement()
                                        var thing2 = ranElement()
                                        var thing3 = ranElement()
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing1) + 1}`, value: thing1, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing2) + 1}`, value: thing2, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing3) + 1}`, value: thing3, inline: true},
                                                ],
                                                color: '6aaa64'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == fourLetters) {
                                        var thing1 = ranElement()
                                        var thing2 = ranElement()
                                        var thing3 = ranElement()
                                        var thing4 = ranElement()
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing1) + 1}`, value: thing1, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing2) + 1}`, value: thing2, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing3) + 1}`, value: thing3, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing4) + 1}`, value: thing4, inline: true},
                                                ],
                                                color: '6aaa64'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    if (reaction.emoji.name == fiveLetters) {
                                        var thing1 = ranElement()
                                        var thing2 = ranElement()
                                        var thing3 = ranElement()
                                        var thing4 = ranElement()
                                        var thing5 = ranElement()
                                        message.channel.send({
                                            embed: {
                                                fields: [
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing1) + 1}`, value: thing1, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing2) + 1}`, value: thing2, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing3) + 1}`, value: thing3, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing4) + 1}`, value: thing4, inline: true},
                                                    {name: `Position: ${ogsplitAnswer.indexOf(thing5) + 1}`, value: thing5, inline: true},
                                                ],
                                                color: '6aaa64'
                                            }
                                        })
                                        noMore = 1
                                    }
                                    accepting = false
                                }
                            })
                        })
                    }
                }
                return;
            })
        }
        
    }
};