const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const yardim = new Discord.MessageEmbed()

    .setColor("")
    .setTitle(``)
    .setAuthor(`Magic Bot Davet`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField(
      "Botu Eklemek İçin:",
      `[TIKLA](https://discord.com/oauth2/authorize?client_id=849036899955769395&scope=bot&permissions=536879150)`
    )
    .addField(
      "Destek Sunucusu İçin:",
      ` [TIKLA](https://discord.gg/uURZFnSvzB)`
    )
    .setFooter(
      `${message.author.username} Tarafından İstendi`,
      message.author.avatarURL()
    );

  return message.channel.send(yardim);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: "davet"
};
