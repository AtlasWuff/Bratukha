module.exports = {
    name: 'roleping',
    aliases: ['rolesping', 'role'],
    category: 'Funny',
    utilisation: '{prefix}roleping',

    execute(client, message, args) {
        var roleId  = message.content.slice(this.name.length + 1).split(' ')[1]
        let role = message.guild.roles.cache.find(r => r.id == roleId)
        message.guild.members.fetch().then(memberList => {
            let usersRoles = []
            memberList.forEach(member => {
                if (member._roles.includes(roleId)) {
                    usersRoles.push(member.id)
                }
            })
            message.channel.send(`<@${usersRoles.join(`> <@`)}>`)
            message.channel.send({
                embed: {
                    description: `This ping is for all people with the **${role.name}** role`,
                    footer: {
                        text: `Done by ${message.author.username}`,
                        icon_url: message.author.avatarURL({ dynamic: true })
                    },
                    color: `b00b69`
                },
            })
            console.log(message)
        })
    },
};