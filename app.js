const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

const ValorantMatch = new Discord.MessageEmbed()
.setColor('#c70039')
.setTitle('Valorant Match -- UserName')
.setAuthor('Valorantplayer#EUW')
.setThumbnail('https://pbs.twimg.com/profile_images/1249149452486692864/_Dl03wK5_400x400.png')
.addField('Valorant matches', 'Valorant match -- Brimstone 13-13')
.addField('Valorant matches', 'Valorant match -- Sage 9-13')
.addField('Valorant matches', 'Valorant match -- Sage 4-13')
.setTimestamp()
.setFooter('made by Wotusay');


 
client.on('message', msg => {
    if (!msg.author.bot) {
        if (msg.content.startsWith("!")) {
        switch (msg.content) {
        case '!ping': 
        msg.reply('pong')
        break;
        case '!pong': 
        msg.reply('ping');
        break;
        case '!showmatches':
        msg.reply(ValorantMatch);
        break;
    } }
    }
});
 
client.login(process.env.DISCORD_TOKEN);