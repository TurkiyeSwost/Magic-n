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
    .send(`**${message.author}** Kasa AΓ§Δ±lΔ±yor...`)
    .then(async msg => {
      setTimeout(() => {
        msg.edit("πͺπ«π«|π«|π«π«πͺ");
      }, 1000);
      setTimeout(() => {
        msg.edit("π«π«π«|π«|π«πͺπͺ");
      }, 1500);
      setTimeout(() => {
        msg.edit("π«π«π«|π«|πͺπͺπ«");
      }, 2000);
      setTimeout(() => {
        msg.edit("π«π«π«|πͺ|πͺπ«π«");
      }, 2000);
      setTimeout(() => {
        msg.edit("π«π«πͺ|πͺ|π«π«π«");
      }, 2500);
      setTimeout(() => {
        msg.edit("π«πͺπͺ|π«|π«π«π«");
      }, 3000);
      setTimeout(() => {
        msg.edit("πͺπͺπ«|π«|π«π«π«");
      }, 3500);
      setTimeout(() => {
        msg.edit("πͺπ«π«|π«|π«π«πͺ");
      }, 4000);
      setTimeout(() => {
        msg.edit(`π― ${item} ΓΔ±ktΔ±!`).then(m => {
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
  name: "kasa-aΓ§",
  description: "CS:GO kasasΔ± aΓ§ar",
  usage: "kasa aΓ§"
};
