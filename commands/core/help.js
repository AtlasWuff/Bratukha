module.exports = {
    name: 'help',
    aliases: ['h', 'commands', 'command', 'cmd'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(' - ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(' - ');
            const funny = message.client.commands.filter(x => x.category == 'Funny').map((x) => '`' + x.name + '`').join(' - ');
            message.channel.send({
                embed: {
                    title: 'Help menu since you dont have common sense',
                    color: 'c20d00',
                    fields: [
                        { name: 'Music', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(' - ') },
                        { name: 'Funny :rofl:', value: funny },
                    ],
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/842163484815917086/882705129449603082/etjis106oe.gif'
                    },
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} that isn't a command`);
            
            message.channel.send({
                embed: {
                    color: 'c20d00',
                    fields: [
                        { name: 'thingy things', value: command.category, inline: true },
                        { name: 'useful things', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'filters to fuck with people', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                }
            });
        };
    },
};