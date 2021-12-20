require('dotenv').config();
const config = require('./config.json') || {};
const tempie = require('./Main_Tempie.js');
const fs = require('fs');
for (const [key, value] of Object.entries(config.bots)) {
    let bot = new tempie();
    bot.start(key);
}