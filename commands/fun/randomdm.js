module.exports = {
    name: 'randomdm',
    aliases: ['randm', 'rdm'],
    category: 'Funny',
    utilisation: '{prefix}randomdm',

    execute(client, message, args) {
        const fetch = require('node-fetch')

        
        fetch('https://getpantry.cloud/apiv1/pantry/6f0cd648-5417-45a3-b293-21d933855420/basket/BratukhaMan').then(data => data.json()).then(json => {
            var items = json.dmClass.dmItems
            const randomElement = items[Math.floor(Math.random() * items.length)];
            message.channel.send({
                embed: {
                    description: `Want to add more to the list of files? DM <@758471171443785780> with your attachment`,
                    title: 'Randomly DMED File',
                    color: 'b00b69',
                    /*footer: {
                        text: 'Dont ban me please, even if its bowler r34'
                    }*/
                },
            })
            message.channel.send(randomElement)
        })
    },
};
