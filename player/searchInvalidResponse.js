module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - I cancelled whatever you said`);
    } else message.channel.send(`${client.emotes.error} - You must give me a valid number between **1** and **${tracks.length}**`);
};