module.exports = {
    name: 'rps',
    aliases: [],
    category: 'rps',
    utilisation: '{prefix}rps',

    execute(client, message, args) {
        message.channel.send('rock paper or scissors')
        var ac = true
        setTimeout(
        function() {
            client.on('message', async (message, author) => {
                if (ac == true) {
                    message.channel.send('you lose l bozo')
                    ac = false
                }
            })
        }, 1000)
    },
};
