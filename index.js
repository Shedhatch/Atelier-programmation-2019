//Séance 1

//Dependencies
const Discord = require('discord.js');
const client = new Discord.Client(); //ou 'self' ou 'bot'
const prefix = '/';+

//Login
client.login("BOT TOKEN")
console.log("Connecté !")


//Séance 2

//simple message
client.on("message", message => {
if(message.content === prefix + 'salut')
message.channel.send("Salut !")

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
