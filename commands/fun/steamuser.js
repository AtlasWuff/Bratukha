const fetch = require('node-fetch')
const image_finder = require('image-search-engine')

module.exports = {
    name: 'steamuser',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}steamuser *userid*',

    async execute(client, message) {
        var msgArgs = message.content.slice(this.name.length + 1)
        var msgArgs = msgArgs.split(' ')
        var msgArgs = msgArgs[1]

        if (!isNaN(msgArgs) && msgArgs.length > 15) {

            function ltrim(str) {
                if(!str) return str;
                return str.replace(/^\s+/g, '');
            }

            var token = `03ADEE53861354BD5B41F0C97E673A01`

            var endpoint = `ISteamUser/GetPlayerSummaries/v2/?key=${token}&steamids=${msgArgs}`
            var url = `http://api.steampowered.com/`

            fetch(url + endpoint).then(data => data.json()).then(json => {
                // Message stuff
                //console.log(json)
                //console.log(url + endpoint)
                JSON.stringify(json.response.players)
                var userData = json.response.players[0]
                //console.log(userData)

                function ranHex() {
                    let n = (Math.random() * 0xfffff * 1000000).toString(16);
                    return n.slice(0, 6);
                };

                async function  printUrl(query){
                var test = await image_finder.find(query)
                return test
                }

                var steamFields = [
                    
                ]
                if (userData.personaname){
                    steamFields.push({name: 'Username', value: userData.personaname, inline: true},)
                }
                if (userData.steamid){
                    steamFields.push({name: 'SteamID', value: userData.steamid, inline: true},)
                }
                //console.log(steamFields)
                
                var endpoint = `ISteamUser/GetFriendList/v1/?key=${token}&steamid=${msgArgs}`
                var url = `http://api.steampowered.com/`

                fetch(url + endpoint).then(data => data.json()).then(json => {
                    
                    JSON.stringify(json.friendslist.friends)
                    console.log(json.friendslist.friends)

                    function capitalizeFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                    }
                    var embedFriends = []

                    if (json.friendslist.friends != []){
                        console.log('True')
                        //var friendList = json.friendslist.friends
                        json.friendslist.friends.forEach(element => {
                            var friendId = element.steamid
                            var relationship = capitalizeFirstLetter(element.relationship)

                            var endpoint = `ISteamUser/GetPlayerSummaries/v2/?key=${token}&steamids=${friendId}`
                            var url = `http://api.steampowered.com/`

                            fetch(url + endpoint).then(data => data.json()).then(json => {
                                JSON.stringify(json.response.players)
                                var userData = json.response.players[0]
                                var name = userData.personaname
                                //console.log(userData)
                                embedFriends.push(`${name}`)
                            }) 
                        });

                        setTimeout(function(){
                            console.log(embedFriends)

                            steamFields.push({name: 'Friends', value: embedFriends.join(`\n`), inline: false},)

                            message.channel.send({
                                embed: {
                                    color: '2a475e',
                                    title: 'Steam',
                                    description: `[Profile URL](${userData.profileurl})`,
                                    fields: steamFields,
                                    thumbnail: {
                                        url: userData.avatarfull
                                    },
                                    //timestamp: new Date(),
                                    footer: {
                                        text: message.author.displayName,
                                        icon_url: message.author.avatarURL({ dynamic: true }),
                                    },
                                    //timestamp: new Date(message.createdTimestamp).getTime()
                                },
                            })
                        },500);
                    }
                    //console.log(json.friendslist.friends)
                    //json.friendslist.friends.forEach(element => JSON.stringify(element))
                })
            })
        } else {
            message.channel.send(`You gotta give me a steam user's id`)
        }
    },
};