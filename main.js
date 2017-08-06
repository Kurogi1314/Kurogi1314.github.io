const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MzQzODI3Njc5ODI2NTQyNTky.DGkaeQ.Z4I9Z8IYleJAANWYT_geZPzv9dY');
