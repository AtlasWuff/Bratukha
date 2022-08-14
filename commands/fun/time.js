module.exports = {
    name: 'time',
    aliases: ['currenttime', 'today'],
    category: 'Funny',
    utilisation: '{prefix}time',

    execute(client, message) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = (today.getHours()-4) + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        message.channel.send({
            embed: {
                title: 'Local time',
                description: dateTime
            }
        })
    },
};