exports.run = async (client, message, level) => {
  if (message.channel.type === "dm") return;
  let items = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  let item = items[Math.floor(Math.random() * items.length)];

  message.channel
    .send(`**${message.author}** Kasa Açılıyor...`)
    .then(async msg => {
      setTimeout(() => {
        msg.edit("🔪🔫🔫|🔫|🔫🔫🔪");
      }, 1000);
      setTimeout(() => {
        msg.edit("🔫🔫🔫|🔫|🔫🔪🔪");
      }, 1500);
      setTimeout(() => {
        msg.edit("🔫🔫🔫|🔫|🔪🔪🔫");
      }, 2000);
      setTimeout(() => {
        msg.edit("🔫🔫🔫|🔪|🔪🔫🔫");
      }, 2000);
      setTimeout(() => {
        msg.edit("🔫🔫🔪|🔪|🔫🔫🔫");
      }, 2500);
      setTimeout(() => {
        msg.edit("🔫🔪🔪|🔫|🔫🔫🔫");
      }, 3000);
      setTimeout(() => {
        msg.edit("🔪🔪🔫|🔫|🔫🔫🔫");
      }, 3500);
      setTimeout(() => {
        msg.edit("🔪🔫🔫|🔫|🔫🔫🔪");
      }, 4000);
      setTimeout(() => {
        msg.edit(`😯 ${item} Çıktı!`).then(m => {
          m.delete(5000);
        });
      }, 5000);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["csgo-kasa", "kasa"],
  permLevel: 0
};

exports.help = {
  name: "kasa-aç",
  description: "CS:GO kasası açar",
  usage: "kasa aç"
};
