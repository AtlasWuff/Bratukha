const fetch = require('node-fetch')
const image_finder = require('image-search-engine')

module.exports = {
    name: 'clash',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}clash',

    async execute(client, message) {
        var tagArg = message.content.slice(this.name.length + 1).toUpperCase()
        var cardArg = message.content.slice(this.name.length + 2)

        var tagArg = tagArg.split(' ')
        var tagArg = tagArg[1]
        var cardArg = cardArg.split(' ')
        if (cardArg[2]){
            var cardArg = cardArg[1] + ' ' +cardArg[2]
        } else {
            var cardArg = cardArg[1]
        }
        
        function ltrim(str) {
            if(!str) return str;
            return str.replace(/^\s+/g, '');
        }

        var tagArg = ltrim(tagArg)
        var cardArg = ltrim(cardArg)

        console.log(tagArg)
        console.log(cardArg)

        var endpoint = `/players/%23${tagArg}`
        var url = `https://api.clashroyale.com/v1`

        var token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjkwMGFhZjYzLWM1MGYtNDBmMi1iNDliLTM2ODYxM2E5MzVhYSIsImlhdCI6MTY0MDU0MzkyNywic3ViIjoiZGV2ZWxvcGVyLzRmMmJkOGNjLTAzMDYtOTNhMi04OWM3LTNhZDA2OWQ4NWEzNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNC4yMjQuOTEuNjQiLCIxODQuODkuMTc1LjIwNCIsIjU0LjE3NS40My4xODIiLCIzLjg0LjMwLjIzNCIsIjEwOC4xODkuMTcuODQiXSwidHlwZSI6ImNsaWVudCJ9XX0.Bl7MIblcKG5K2CyjXJ2p_zCV7mt6bUZBljVWXm64yU4C1ar465FEAe73u5Na70R01uiSgtWcrULA_eR0ZyX3YA`

        fetch(url + endpoint, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(data => data.json()).then(json => {
            // Message stuff
            // console.log(json)
            var ifCard = json.cards.filter(results => results.name == cardArg)
            console.log(ifCard[0])
            if (ifCard[0]){
                //console.log(ifCard[0])
                var newBowlLevel = ifCard[0].level

                var mathLevel = 13 - ifCard[0].maxLevel + 1

                var newBowlLevel = newBowlLevel + mathLevel
                console

                if (ifCard[0].count == 0 && newBowlLevel == 14){
                    var cardCount = 'Maxed'
                } else {
                    var cardCount = ifCard[0].count
                }

                //console.log(json)

                function ranHex() {
                    let n = (Math.random() * 0xfffff * 1000000).toString(16);
                    return n.slice(0, 6);
                };

                async function  printUrl(query){
                   var test = await image_finder.find(query)
                   return test
                }

                message.channel.send({
                    embed: {
                        color: ranHex(),
                        title: cardArg,
                        fields: [
                            {name: 'Level', value: newBowlLevel, inline: true},
                            {name: 'Amount', value: cardCount, inline: true}
                        ],
                        /*image: {
                            url: printUrl(ifCard[0].name)
                        },*/
                        thumbnail: {
                            url: ifCard[0].iconUrls.medium
                        },
                        footer: {
                            text: json.name,
                            icon_url: 'https://cdn.discordapp.com/attachments/894669724305215509/923384500631777290/IMG_2022.png',
                        },
                        //timestamp: new Date(message.createdTimestamp).getTime()
                    },
                })
            } else {
                message.channel.send(`That didnt work. Make sure to capitalize each word and change all O's for Zeroes's in the player tag`)
            }
        })
        //message.channel.send(`If it didnt work, make sure you have your capitals right for the card **NOTE: There are no o's only Zero's in a player's tag`)
    },
};