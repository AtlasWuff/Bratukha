const image_finder = require('image-search-engine')

module.exports = {
    name: 'image',
    aliases: ['img'],
    category: 'Funny',
    utilisation: '{prefix}image',

    execute(client, message, args) {
        const msgArgs = message.content.slice(this.name.length + 1)
        //msgArgs = args.join(' ')
        //const image = await google.scrape(msgArgs,1)
        //message.channel.send(image[0].url)

        async function  printUrl(query){
            message.channel.send(await image_finder.find(query))
        }
        printUrl(msgArgs)
    }
}