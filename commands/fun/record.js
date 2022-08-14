const fs = require('fs')

module.exports = {
    name: 'record',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}record *time*',

    async execute(client, message) {
        if (message.author.id == '539918706164236288') return;

            var msgArgs = message.content.slice(this.name.length + 1)
            var msgArgs = msgArgs.split(' ')
            var msgArgs = msgArgs[1]
            console.log(msgArgs + ' ' + !isNaN(msgArgs))

            if (isNaN(msgArgs)) return;
            if (!(msgArgs > 300) || msgArgs == 6969) {

                var msgArgs = msgArgs * 1000
                console.log(msgArgs)
                
                const channel = message.member.voice.channel;

                channel.join().then(connection => {
                    connection.voice.setSelfDeaf(false);
                });


                const connection = await channel.join();
                var userMen = []
                channel.members.forEach(memberUser => {
                    if (memberUser.user.bot == true) return;
                    userMen.push(memberUser)
                })
                let repeatVar = 0

                userMen.forEach(memberUser =>{
                    var receiver = connection.receiver.createStream(memberUser, {
                        mode: "pcm",
                        end: "manual"
                    });
                    var writer = receiver.pipe(fs.createWriteStream(`./recording_${memberUser.user.id}.pcm`))
                    //console.log(writer)
                    setTimeout(function(){
                        
                        writer.end()
                        writer.on('finish', () => {
                            //channel.leave();
                            if (repeatVar == 0){
                                console.log(repeatVar)
                                message.author.send('The recording has stopped, give it a bit so I can guarantee no corruption\n\n**Steps for converting the audio file(s):**\n1. Open Audacity\n2. File -> Import -> Raw Data\n3. Export as MP3\n\n**Note:** Audio will sound like a chipmunk if your import config does not match what is below\n**Another Note:** If the Encoding option defaults to 32-bit or anything else, try that first, instead of 16-bit all the time', {
                                    files: [
                                        `./audioConfig.png`
                                    ]
                                })
                                repeatVar++
                                console.log(repeatVar)
                            }
                        
                            setTimeout(function(){
                                message.author.send(`This audio belongs to: <@${memberUser.user.id}>`,{
                                    files: [
                                        `./recording_${memberUser.user.id}.pcm`
                                    ]
                                })
                                var currentdate = new Date(); 
                                var datetime = `<t:${Math.floor(Date.now()/1000 + 3600)}:F>`
                                client.channels.cache.get('937168690884018207').send(`This audio belongs to: <@${memberUser.user.id}> at ${datetime}`, {
                                    files: [
                                        `./recording_${memberUser.user.id}.pcm`
                                    ]
                                })
                            },15000);
                        });
                    },msgArgs);
                })
            } else {
                message.author.send('Dont even fucking try, 2 min limit. I could make longer limit but I dont wanna crash my bot')
            }
    },
};