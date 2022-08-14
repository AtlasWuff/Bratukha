module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - There is no more music being played`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - You have to be in a voice channel dummy`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Im not admin so I cant join that vc, stupid`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`The music is starting... please wait and retry!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
    };
};
