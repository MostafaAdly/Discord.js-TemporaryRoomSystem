require("dotenv").config()
const { Client, Intents, MessageEmbed, MessageButton, MessageActionRow, Permissions, Collection } = require("discord.js")
class Main {
    start(token) {
        let bot = new Client({
            intents: [Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_BANS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
            partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
            ws: ["GUILDS", 'GUILD_MEMBERS']
        })
		
		
		bot.login(token)
	}
}

module.exports = Main