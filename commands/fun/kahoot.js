module.exports = {
    name: 'kahoot',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}kahoot',

    async execute(client, message, args) {
        var kahootCode  = message.content.slice(this.name.length + 1).split(' ')[1]
        var name  = message.content.slice(this.name.length + 2).split(' ')[1]
        var repNum  = message.content.slice(this.name.length + 3).split(' ')[2]
        console.log(kahootCode)
        console.log(name)

        const puppeteer = require('puppeteer');
        const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox']
            });
        var x = 1
        message.channel.send({
            embed: {
                color: '8000ff',
                description: `Don't run the command again or it the bot will crash`,
                footer: {
                    text: `Code: ${kahootCode}`,
                    icon_url: 'https://cdn.discordapp.com/attachments/894669724305215509/952603724042346506/Kahoot-icon-square.png',
                },
            },
        }).then(msg => {
            async function getPic(namee) {
                try {
                    msg.edit({
                        embed: {
                            description: `Bot **${name} ${x}** is joining`,
                            color: `8000ff`,
                            footer: {
                                text: `Code: ${kahootCode}`,
                                icon_url: 'https://cdn.discordapp.com/attachments/894669724305215509/952603724042346506/Kahoot-icon-square.png',
                            },
                        },
                    })
                    const page = await browser.newPage();
                    await page.goto('https://kahoot.it');
                    await page.setDefaultNavigationTimeout(0)
                    await page.setViewport({width: 1920, height: 1080})

                    // Kahoot page input
                    await page.click('#game-input')
                    await page.type('#game-input', kahootCode)
                    await page.keyboard.press('Enter')
                    await page.waitForNavigation({waitUntil: 'networkidle2'})
                    await page.click('#nickname')
                    await page.type('#nickname', namee)
                    await page.keyboard.press('Enter')
                    await page.waitForNavigation()

                    x++
                    var nameeg = namee.split(' ')[0]
                    if (x > repNum) {
                        msg.edit({
                            embed: {
                                description: `All bots have finished joining`,
                                color: `00f000`,
                                footer: {
                                    text: `Code: ${kahootCode}`,
                                    icon_url: 'https://cdn.discordapp.com/attachments/894669724305215509/952603724042346506/Kahoot-icon-square.png',
                                },
                            },
                        })
                        await browser.close()
                    } else {
                        getPic(`${nameeg} ${x}`);
                    }
                } catch (error) {
                    message.channel.send({
                        embed: {
                            //description: `Something went wrong`,
                            fields: [
                                { name: 'Error message', value: command.category, inline: true },
                            ],
                            color: `00f000`,
                            footer: {
                                text: `Code: ${kahootCode}`,
                                icon_url: 'https://cdn.discordapp.com/attachments/894669724305215509/952603724042346506/Kahoot-icon-square.png',
                            },
                        },
                    })
                    throw error;
                }
            }
            getPic(`${name} ${x}`);
        })
        
        
    },
};
