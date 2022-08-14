module.exports = {
    name: 'testcmd',
    aliases: [],
    category: 'Dead',
    utilisation: '{prefix}kick',

    execute(client, message, args) {
        client.api.channels(message.channel.id).messages.post({
            data: {
                content: "bonjour",
                components: [
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 2,
                                "label": "hello",
                                "style": 3,
                                "custom_id": "click_one"
                            }
                        ]
                    }
                ]
            }
        }) 
    },
};
