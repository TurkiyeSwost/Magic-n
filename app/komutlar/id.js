const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let id = message.mentions.members.first() || message.author;
  message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${id.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["id", "kimlik"],
  permlevel: 0
};

exports.help = {
  name: "id",
  description: "Etiketlenen kişinin idsini atar...",
  usage: "!id"
};
