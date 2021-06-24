const Discord = require('discord.js');
const path = require('path');
const fetch = require('node-fetch');
const client = new Discord.Client();

require('dotenv').config();
const TOKEN = process.env.BOTTOKEN;
client.login(TOKEN);

const getRandomJoke = ()=>{
    return fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?type=twopart")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let arrData = [data];
        return (arrData[0].setup + "\n" + arrData[0].delivery);
    })
}
const getDarkJoke = ()=>{
    return fetch("https://v2.jokeapi.dev/joke/Dark?type=twopart")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let arrData = [data];
        return (arrData[0].setup + "\n" + arrData[0].delivery);
    })
}
const getProgJoke = ()=>{
    return fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let arrData = [data];
        return (arrData[0].setup + "\n" + arrData[0].delivery);
    })
}
const getPunJoke = ()=>{
    return fetch("https://v2.jokeapi.dev/joke/Pun?type=twopart")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let arrData = [data];
        return (arrData[0].setup + "\n" + arrData[0].delivery);
    })
}
const getSpookyJoke = ()=>{
    return fetch("https://v2.jokeapi.dev/joke/Spooky?type=twopart")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let arrData = [data];
        return (arrData[0].setup + "\n" + arrData[0].delivery);
    })
}
const getMiscJoke = ()=>{
    return fetch("https://v2.jokeapi.dev/joke/Miscellaneous?type=twopart")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let arrData = [data];
        return (arrData[0].setup + "\n" + arrData[0].delivery);
    })
}

client.on('ready', botOnline);

function botOnline() {
    console.log('Bot is online!');
    console.log(`logged in as user ${client.user.tag}`);
}

client.on("message", msg =>{
    if(msg.author.bot) return;
    if(msg.content === "-sr random"){
        getRandomJoke().then(joke => msg.channel.send(joke));
    }
    if(msg.content === "-sr dark"){
        getDarkJoke().then(joke => msg.channel.send(joke));
    }
    if(msg.content === "-sr programming"){
        getProgJoke().then(joke => msg.channel.send(joke));
    }
    if(msg.content === "-sr pun"){
        getPunJoke().then(joke => msg.channel.send(joke));
    }
    if(msg.content === "-sr spooky"){
        getSpookyJoke().then(joke => msg.channel.send(joke));
    }
    if(msg.content === "-sr misc"){
        getMiscJoke().then(joke => msg.channel.send(joke));
    }

    if(msg.content.startsWith('-sarcasm') || msg.content.startsWith('help')){
	

        //checking if the help command is executed.
        if(msg.content === 'help' || msg.content.slice(9) === 'help' || msg.content === '-sarcasm'){
    
            //displaying the created help embed.
            helpHumans(msg);
            return;
            
        }
        else if(msg.content.slice(9) === 'ping'){
            msg.reply('Calculating ping 🔉').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - msg.createdTimestamp
            resultMessage.edit(`Bot latency: ${ping}ms, API Latency: ${client.ws.ping}ms`)
            
            })
            return;
        }
    }    
})

const helpHumans = (msg) => {
    const helpBox = new Discord.MessageEmbed()
	  .setColor('#fae78e')
	  .setTitle('Bonjour Boring Humans!!')
	  .setAuthor('Sarcaster', 'https://cdn.discordapp.com/avatars/856921539416686613/d4856e879dbbf1ac859b65031a1f367c.png?size=256', 'https://github.com/akshat-fsociety')
	  .setDescription('I am a bot that wants to help you with providing some good dark, spooky jokes to help your mood uplift 😉. Laugh with me 😁')
	  .setThumbnail('https://cdn.discordapp.com/avatars/856921539416686613/d4856e879dbbf1ac859b65031a1f367c.png?size=256')
	  .setImage('')
	  .addFields(
		      {name: 'Usage', value:"```-sr joke type```"},
		      {name: 'All commands', value: "Here's everything that you can do with me."},
		      {name: `Command', value: "-sarcasm\n\n-sarcasm help\n\n-sarcasm ping\n\n\n
              -sr random\n\n
              -sr dark\n\n
              -sr spooky\n\n
              -sr programming\n\n
              -sr pun\n\n
              -sr misc`, inline: true},

		      {name: 'Function', value: `Shows this message.\n\n\nPings the bot and shows the latency.\n\n\n\nShow you my random humor\n\n
              Show you my dark humor\n\n
              Show you my spooky humor\n\n
              Show you my programming humor\n\n
              Show you my pun humor\n\n
              Show you my misc humor\n\n`, inline: true}
		  )
	    
    msg.channel.send(helpBox);
    return;
}
