const dotenv = require("dotenv").config();
const fs = require("fs");
const discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const discordReply = require("discord-reply");
const Tenor = require("tenorjs").client({
  Key: "4K9M2ZV6F50G", // https://tenor.com/developer/keyregistration
  Filter: "off", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_US", // Your locale here, case-sensitivity depends on input
  MediaFilter: "minimal", // either minimal or basic, not case sensitive
  DateFormat: "MM/D/YYYY - H:mm:ss A", // Change this accordingly
});

var client = new discord.Client(
  { disableMentions: "none" },
  { disableEveryone: "none" },
  {
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    ],
  }
);

const { Player } = require("discord-player");

client.player = new Player(client);
client.config = require("./config/bot");
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync("./commands").forEach((dirs) => {
  const commands = fs
    .readdirSync(`./commands/${dirs}`)
    .filter((files) => files.endsWith(".js"));

  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    console.log(`Loading command ${file}`);
    client.commands.set(command.name.toLowerCase(), command);
  }
});

const events = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));
const player = fs
  .readdirSync("./player")
  .filter((file) => file.endsWith(".js"));

for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}

for (const file of player) {
  console.log(`Loading discord-player event ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
}

client.login(process.env.DiscordToken);
