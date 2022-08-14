module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - **${track.title}** is now being played for your pleasure :wink:`);
};