const Tenor = require("tenorjs").client({
    "Key": "4K9M2ZV6F50G", // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
    "DateFormat": "MM/D/YYYY - H:mm:ss A" // Change this accordingly
});

const fs = require('fs');
const discord = require('discord.js');


module.exports = {
    name: 'gif',
    aliases: ['tenor', 'gifsearch', 'gf'],
    category: 'Funny',
    utilisation: '{prefix}gif',

    execute(client, message, args) {

        const msgArgs = message.content.slice(this.name.length + 1)

        Tenor.Search.Query(msgArgs, "1")
                .then(Results => {
                    Results.forEach(Post => {
                    message.channel.send(Post.itemurl)
                });
        }).catch(console.error)

        
    },
};

//message.channel.send({
                        //embed: {
                            //title: 'Women',
                            //color: 'c20d00',
                            //image: {
                                //url: (Post.media[0].itemurl),
                            //},
                        //},
                    //})