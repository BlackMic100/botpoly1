const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links  تحذير النشر! ممنوع **`)
    }
});


client.on("message", message => {
 if (message.content === "رابط") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Poly Bot:po: جميع الحقوق محفوظة 2018 لــبوت')  
      .addField('هاذا هو الرابط', `  https://discord.gg/AscbZ3h `)
  message.author.send({embed});

 }
});


client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='me')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });


client.login('NDc5OTc2NjIyNzEyMjkxMzI4.Dnqf3g.xEcAr-8zoB9UoPn-vhHBguwHVW4')
