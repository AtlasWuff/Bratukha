module.exports = {
    name: 'hehehehaw',
    aliases: ['heheheha', 'king'],
    category: 'Funny',
    utilisation: '{prefix}hehehehaw',

    execute(client, message) {
        message.channel.send({
                embed: {
                    title: 'HEHEHEHAW',
                    color: '538fc6',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/894669724305215509/928800374985461820/clash-royale-emotes.gif'
                    },
                },
            });
    },
};