const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const pinkcode = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor(`Pink Code Share  | Müzik Komutları`, client.user.avatarURL)
    .setDescription("**[]()**")
    .setThumbnail(client.user.avatarURL)
    .addField(
      "**Komutlar:**",
      "`çal`, `kapat`, `duraklat`, `devam`, `ses (1-100)`, `sıra`, `çalan`, `geç`, `müzikdetay`"
    )
    .setFooter(``, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(pinkcode).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["müzik"],
  permLevel: 0
};

exports.help = {
  name: "komutlar",
  category: "Yardım",
  description: "Yardım kategorilerini gösteir."
};
