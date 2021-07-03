const Discord = require("discord.js");
String.prototype.replaceA = function(find, replace) {
  return this.replace(new RegExp(find, "g"), replace);
};
const donustur = function(sayi) {
  let gorunum = sayi
    .toString()
    .replaceA("0", "0a")
    .replaceA("1", "1a")
    .replaceA("2", "2a")
    .replaceA("3", "3a")
    .replaceA("4", "4a")
    .replaceA("5", "5a")
    .replaceA("6", "6a")
    .replaceA("7", "7a")
    .replaceA("8", "8a")
    .replaceA("9", "9a");

  gorunum = gorunum
    .replaceA("0a", "<a:sifir0:692766916913397882>")
    .replaceA("1a", "<a:bir1:692766283829215292>")
    .replaceA("2a", "<a:iki2:692766356646395974>")
    .replaceA("3a", "<a:uc3:692766429359112214>")
    .replaceA("4a", "<a:dort4:692766512221519872>")
    .replaceA("5a", "<a:bes5:692766577677959179>")
    .replaceA("6a", "<a:alti6:692766649975308359>")
    .replaceA("7a", "<a:yedi7:692766712092688425>")
    .replaceA("8a", "<a:sekiz8:692766777700122625>")
    .replaceA("9a", "<a:dokuz9:692766849800077312>");

  return gorunum;
};
exports.run = (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === "voice");
  let count = 0;
  let member = message.guild.members.size;
  let tag = message.guild.members.filter(r => r.user.username.includes("₮"))
    .size;
  let çevrimiçi = message.guild.members.filter(
    m => m.presence.status !== "offline"
  ).size;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  const emoji3 = client.emojis.find(emoji => emoji.name === "tik");
  const amerikanembed = new Discord.RichEmbed()
    .setColor("black")
    .setDescription(
      `${emoji3} Sunucuda ${donustur(
        member
      )} kişi bulunmaktadır.\n\n${emoji3} Sunucuda ${donustur(
        çevrimiçi
      )} aktif kişi bulunmaktadır.\n\n${emoji3} Ses kanallarında ${donustur(
        count
      )} kişi bulunmaktadır. `
    )
    .setTimestamp()
    .setThumbnail(
      `https://cdn.discordapp.com/attachments/633643325148233729/664714756258791443/mka1.gif`
    )
    .setFooter(message.author.tag, message.author.avatarURL);
  message.channel.sendEmbed(amerikanembed).then(msg => msg.delete(10000000));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};
exports.help = {
  name: "say",
  description: "",
  usage: ""
};
