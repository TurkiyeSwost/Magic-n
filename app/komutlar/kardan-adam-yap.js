const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Gif Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const kay = new Discord.MessageEmbed()
      .setAuthor(message.author.username + " Canlı Bir Kardan Adam Yaptı")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://media.discordapp.net/attachments/788673281455685653/794315204338515978/original.gif`
      );
    return message.channel.send(kay);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kardanadamyap",
  description: "Kardan Adam Yapar",
  usage: "kardanadamyap"
};
