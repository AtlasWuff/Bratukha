const fetch = require('node-fetch')
const image_finder = require('image-search-engine')
const Twit = require('twit')

var T = new Twit({
    consumer_key:         'TeYC5HPfkbD8ZfP02d18KWif6',
    consumer_secret:      '5xQ09FK2CiUcv04sZkmYQzNV2ovRHuJrcRrvrraxebGO3SlmBR',
    access_token:         '1311002997330247681-pVjPEvHxC5KwJbrGEbgh2UlO9TxHrY',
    access_token_secret:  'Fwi6UwgMjyFSScG2EQpWNMCHijsAON7E32lJ7wsE7WWRd',
})

module.exports = {
    name: 'followers',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}followers',

    async execute(client, message) {
        var msgArgs = message.content.slice(this.name.length + 1)

        function ltrim(str) {
            if(!str) return str;
            return str.replace('@', '');
        }

        var msgArgs = ltrim(msgArgs)

        if (msgArgs) {
            console.log(msgArgs)

            var token = `AAAAAAAAAAAAAAAAAAAAANkhUwEAAAAAJhpwBQDVkk2FxzGWjji5bhNAvp4%3DWMIn4LlSX1QMQ2wKGvVVOSOklGLoBb6sb22WbAmf7jzYRXWz6c`

            var endpoint = `weather?q=${msgArgs}&appid=${token}`
            var url = `https://api.twitter.com/2/tweets?ids=`

            T.get('followers/list', { screen_name: msgArgs },  function (err, data, response) {
                console.log(data)
                var userList = []
                data.users.forEach(element => {
                    var test = data.users.indexOf(element)
                    userList.push(`**Name:** ${data.users[test].name}\n**Handle:** @${data.users[test].screen_name}\n **Bio:** ${data.users[test].description}`)
                    
                })
                var params = []
                userList.forEach(element => {
                    params.push({name: `User`, value: element, inline: false})
                })

                message.channel.send({
                    embed: {
                        color: '00acee',
                        title: `${msgArgs}'s Followers`,
                        fields: params,
                        timestamp: new Date(),
                    },
                })
            })
        } else {
            message.channel.send(`Gotta give me a user's twitter handle`)
        }
    },
};