const fetch = require('node-fetch')

module.exports = {
    name: 'testy',
    aliases: ['ipy'],
    category: 'Debug',
    utilisation: '{prefix}test',

    async execute(client, message) {
        var msgArgs = message.content.toUpperCase()
        var msgArgs = msgArgs.substring(4)
        console.log(msgArgs)
        var endpoint = `/players/%23${msgArgs}`
        var url = `https://api.db-ip.com/v2/free/self`

        //var token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAxNmFkNzg4LTRmMWYtNDk4Ny1iZTEzLTcwNGIyNmIyNGE0MSIsImlhdCI6MTYzNTM2NjcxOCwic3ViIjoiZGV2ZWxvcGVyLzRmMmJkOGNjLTAzMDYtOTNhMi04OWM3LTNhZDA2OWQ4NWEzNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODQuODkuMTc1LjIwNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VStrpuan24OplLrWs28Fgm5QLOY_VYWWTIYmfqA1EWj7_YZMGH8kXAjpbkdopCQ85oi8_Xk3KXfllId_A_K10A`

        fetch(url).then(data => data.json()).then(json => {

            function ranHex() {
                let n = (Math.random() * 0xfffff * 1000000).toString(16);
                return n.slice(0, 6);
            };

            console.log(json)
            //message.channel.send(`Server IP: ${json.ipAddress} | **State:** ${json.stateProv} | **City:** ${json.city}`)
            message.channel.send({
                embed: {
                    color: '9b7cbe',
                    title: 'Heroku Stats',
                    fields: [
                        {name: 'IP Address', value: json.ipAddress, inline: true},
                        {name: 'State', value: json.stateProv, inline: true},
                        {name: 'City', value: json.city, inline: true}
                    ],
                    thumbnail: {
                        url: 'https://cdn.discordapp.com/attachments/894669724305215509/923661731924951081/anonymous-anonymous-bites-back.gif'
                    },
                    /*thumbnail: {
                        url: ifCard[0].iconUrls.medium
                    },*/
                    footer: {
                        text: ':nerd:',
                        //icon_url: 'https://cdn.discordapp.com/attachments/894669724305215509/923661731924951081/anonymous-anonymous-bites-back.gif',
                    },
                    //timestamp: new Date(message.createdTimestamp).getTime()
                },
            })
        })
        
    },
};