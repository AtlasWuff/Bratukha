module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Yeah, whatever you searched doesnt exist`);
};