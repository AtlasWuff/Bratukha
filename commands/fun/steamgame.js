const fetch = require('node-fetch')
const image_finder = require('image-search-engine')

module.exports = {
    name: 'steamgame',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}steamgame *game*',

    async execute(client, message) {
        var msgArgs = message.content.slice(this.name.length + 1)
        var msgArgs = ltrim(msgArgs)
        //console.log(msgArgs)
        function ltrim(str) {
            if(!str) return str;
            return str.replace(/^\s+/g, '');
        }

        fetch(`http://api.steampowered.com/ISteamApps/GetAppList/v0002/`).then(data => data.json()).then(json => {
            //console.log(json.applist.apps)
            var msgArgs = message.content.slice(this.name.length + 1)
            var msgArgs = ltrim(msgArgs)

            console.log(msgArgs)
            var msgArgs = json.applist.apps.filter(gameName => gameName.name == msgArgs)
            var msgArgs = msgArgs[0].appid
            //console.log(json)
            
            var token = `03ADEE53861354BD5B41F0C97E673A01`

            var endpoint = `ISteamUserStats/GetNumberOfCurrentPlayers/v1/?key=${token}&appid=${msgArgs}&format=json`
            var url = `http://api.steampowered.com/`

            fetch(url + endpoint).then(data => data.json()).then(json => {
                // Message stuff
                //console.log(json)
                //console.log(url + endpoint)
                //JSON.stringify(json.response.players)
                //var userData = json.response.players[0]
                console.log(json.response.player_count)
                var playerCount = json.response.player_count

                function ranHex() {
                    let n = (Math.random() * 0xfffff * 1000000).toString(16);
                    return n.slice(0, 6);
                };
                
                message.channel.send({
                    embed: {
                        color: '2a475e',
                        title: message.content.slice(this.name.length + 1),
                        fields: [
                            {name: 'Player Count', value: playerCount, inline: true},
                        ],
                        footer: {
                            text: message.author.displayName,
                            icon_url: message.author.avatarURL({ dynamic: true }),
                        },
                        timestamp: new Date(message.createdTimestamp).getTime()
                    },
                })
            })
        })
    },
};