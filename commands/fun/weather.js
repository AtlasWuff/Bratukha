const fetch = require('node-fetch')
const image_finder = require('image-search-engine')

module.exports = {
    name: 'weather',
    aliases: [],
    category: 'Funny',
    utilisation: '{prefix}weather',

    async execute(client, message) {
        var cityArg = message.content.slice(this.name.length + 1)

        //var cityArg = cityArg.split(' ')
        //var cityArg = cityArg[1]

        function ltrim(str) {
            if(!str) return str;
            return str.replace(/^\s+/g, '');
        }

        var cityArg = ltrim(cityArg)

        console.log(cityArg)

        var token = `1ffd492871f53da15bf34db511523707`

        var endpoint = `weather?q=${cityArg}&appid=${token}`
        var url = `https://api.openweathermap.org/data/2.5/`

        fetch(url + endpoint).then(data => data.json()).then(json => {
            // Message stuff
            console.log(json)

            function ranHex() {
                let n = (Math.random() * 0xfffff * 1000000).toString(16);
                return n.slice(0, 6);
            };

            async function  printUrl(query){
               var test = await image_finder.find(query)
               return test
            }

            var kelvin = json.main.temp
            var farenheit = ((((kelvin-273.15)*9)/5)+32).toFixed(2)

            var weatherDes = json.weather[0].description
            var weatherDes = weatherDes.charAt(0).toUpperCase() + weatherDes.slice(1)


            message.channel.send({
                embed: {
                    color: ranHex(),
                    title: json.name,
                    fields: [
                        {name: 'Degrees', value: farenheit + ' F°', inline: true},
                        {name: 'Pressure', value: json.main.pressure + ' hPa', inline: true},
                        {name: 'Humidity', value: json.main.humidity + '%', inline: true},
                        {name: 'Current Situation', value: json.weather[0].main, inline: true},
                        {name: 'Description', value: weatherDes, inline: true},
                        {name: 'Cloudiness', value: json.clouds.all + '%', inline: true},
                        {name: 'Wind Speed', value: json.wind.speed + ' m/s', inline: true},
                        {name: 'Wind Degree', value: json.wind.deg + '°', inline: true},
                        {name: 'Country', value: json.sys.country, inline: true},
                    ],
                    thumbnail: {
                        url: printUrl(cityArg)
                    },
                    /*footer: {
                        url: ifCard[0].iconUrls.medium
                    },*/
                    timestamp: new Date(),
                    footer: {
                        text: message.author.displayName,
                        //icon_url: message.user.avatarURL({ dynamic: true }),
                    },
                    //timestamp: new Date(message.createdTimestamp).getTime()
                },
            })
        })
    },
};
