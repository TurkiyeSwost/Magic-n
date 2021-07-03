const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `Bir ülke girmeyi unuttunuz!! Örnek: ${ayarlar.prefix}covid19 TR (Türkiye) ,CH (Çin), US (Amerika Birleşik Devletleri), FR (Fransa), NE (Norveç), IS (İsveç)`
      )
    );
  let a = args[0]
    .toLowerCase()
    .replace("türkiye", "TR")
    .replace("çin", "CH")
    .replace("amerika", "US")
    .replace("japonya", "JP")
    .replace("fransa", "FR")
    .replace("norveç", "NE")
    .replace("isveç", "IS");

  const text = await snekfetch.get(
    `https://thevirustracker.com/free-api?countryTotal=${a}`
  );
  const body = text.body;
  let ülk = body.countrydata[0].info.title;

  let zerocode = new Discord.MessageEmbed()
    .setColor("WHITE")
    .setTitle("COVID-19")
    .setDescription(`COVID-19 İstatistikleri **${ülk}**`)
    .setThumbnail(
      "https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2020/03/1800x1200_coronavirus_1.jpg"
    )
    .addField(
      " Toplam vaka sayısı:",
      `${body.countrydata[0].total_cases}`,
      false
    )
    .addField(" İyileşen:", `${body.countrydata[0].total_recovered}`, false)
    .addField(" Enfekte:", `${body.countrydata[0].total_active_cases}`, false)
    .addField(" Ölümler:", `${body.countrydata[0].total_deaths}`, false)
    .addField(
      " Bugün yeni vakalar:",
      `${body.countrydata[0].total_new_cases_today}`,
      false
    )
    .addField(
      " Bugün yeni ölümler:",
      `${body.countrydata[0].total_new_deaths_today}`,
      false
    )
    .addField(
      " Ciddi Vakalar:",
      `${body.countrydata[0].total_serious_cases}`,
      false
    )
    .setTimestamp()
    .setFooter("COVID-19 ", client.user.avatarURL);
  message.channel.send(zerocode);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["corona", "covid", "covid19"],
  permLevel: 0
};

exports.help = {
  name: "korona",
  description: "",
  usage: ""
};
