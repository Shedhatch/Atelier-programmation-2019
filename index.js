//Séance 1

//Dependencies
const Discord = require('discord.js');
const client = new Discord.Client(); //ou 'self' ou 'bot'
const prefix = '/';
const fs = require("fs");

//Login
client.login("BOT TOKEN")
console.log("Connecté !")


//Séance 2

//simple message
client.on("message", message => {
if(message.content === prefix + 'salut')
message.channel.send("Salut !")
message.react("Emoji")
} )

//message encadré
client.on("message", message => {
  if(message.content === prefix + "info"){
 message.channel.send({embed: {
  color: 0x11c191, //rgb: https://cog-creators.github.io/discord-embed-sandbox/ 
  author: {
  },
  title: "AIDE AUX COMMANDES",
  url: "",
  description: `Voici toutes les commandes que du bot.`,
  fields: [
    {
      name: `${prefix}`,
      value: "Voici le préfix"
    },
     {
      name: `${prefix}salut`,
      value: "Le bot vous salura"
    },

    
  ],
  timestamp: new Date(),
  footer: {
    text: "Run me"
  }
}
});
}
});

//Séance 3 (à venir !)

client.commands = new Discord.Collection();

  fs.readdir("./commands/", (err, Files) =>{
    if(err) console.log(err);
  
    let jsfile = Files.filter(f => f.split(".").pop() ==="js")
    if(jsfile.length <= 0){
      console.log("can\'t find your folder");
      return;
    }
  

 
    jsfile.forEach((f, i ) => {
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded !`); 
     client.commands.set(props.help.name, props);
    })
  })



  client.on("message", async message => {
    if(message.author.client) return;
    if(message.channel.type === "dm")return;
    
    let messageArray = message.content.split(" "); 
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message, args);


  
  });