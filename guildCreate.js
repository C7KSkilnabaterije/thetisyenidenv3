const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**GÇRX CODE',
  '**YouTube/GÇRX**',
  '**https://discord.gg/sYwEs33**'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + ' | ' + client.guilds.size + '  | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' ');
})
