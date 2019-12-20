const Discord = require("discord.js");
const fs = require("fs");
const prefix = '/'

module.exports.run = async (bot, message, args) => {


    let randomfunction = [


      "1", 
      "2",
      "3",
      "4",
      "5",
      "6",
    
  ];

    let maths = Math.floor((Math.random() * randomfunction.length));

    

     message.channel.send(`${randomfunction[maths]}`);
       
    }
  


  module.exports.help = {
    name: prefix + "dé"
  }
