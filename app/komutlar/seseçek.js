const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message.reply("Bi Ses Kanalında Olman Gerek.");
  }
  const filter = (reaction, user) => {
    return (
      [":white_check_mark:", ":x:"].includes(reaction.emoji.name) &&
      user.id === kullanıcı.id
    );
  };

  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı) return message.channel.send("Bir Kullanıcı Belirtmelisin.");

  let member = message.guild.member(kullanıcı);

  if (!member.voice.channel)
    return message.channel
      .send("Etiketlenen Kullanıcı Ses Kanalında Değil.")
      .then(m => m.delete, { timeout: 5000 });

  const voiceChannel = message.member.voice.channel.id;
  if (!voiceChannel) return;

  let log = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(
      `${kullanıcı}, ${message.author} \`${message.member.voice.channel.name}\` Odasına Çekmek İstiyor. Onaylıyormusun?`
    );

  let mesaj = await message.channel.send(log);
  await mesaj.react(":white_check_mark:");
  await mesaj.react(":x:");
  mesaj
    .awaitReactions(filter, {
      max: 1,
      time: 60000,
      errors: ["time"]
    })
    .then(collected => {
      const reaction = collected.first();
      if (reaction.emoji.name === ":white_check_mark:") {
        let kabul = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(`${kullanıcı} Odaya Çekme İsteğini Onayladı.`);
        message.channel.send(kabul);
        kullanıcı.voice.setChannel(message.member.voice.channel.id);
      } else {
        let baskan = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription(`${kullanıcı} Odaya Çekme İsteğini Reddetti.`);
        message.channel.send(baskan);
      }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "çek"
};
