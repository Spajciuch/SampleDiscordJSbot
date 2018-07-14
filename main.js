const Discord = require('discord.js');
const client = new Discord.Client();
const ustawienia = require("./ustawienia.json")
const token = require("./token.json")

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`jestem ${client.guilds.size} serwerach, dla ${client.users.size} ludzi.`);
  client.user.setActivity(`by: rkubaplYT#6360 | !komendybota`); 
  client.channels.get("462283282441306128").send("Jestem online!");
  //client.channels.get("460042139733327903").send(`Użytkownik ${msg.member.displayName} użył komendy ${msg.content.substring(0)}`);
  
});




client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Nowy serwer: ${guild.name} (id: ${guild.id}). Serwer posiada ${guild.memberCount} użytkowników!`);
  const { MessageEmbed } = require("discord.js");
  const info23 = new MessageEmbed()
  .setColor("#00ff00")
  .setDescription(`Nowy serwer: ${guild.name} (ID:${guild.id} ) `)
  .addField(`Założyciel:`,  `${guild.owner.displayName} (ID: ${guild.owner.id})`)
  .addField(`Ilość osób:`, guild.memberCount)
  .setFooter("Polak Bot 2018")
  .setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
  client.channels.get("462283282441306128").send(info23);
  //client.channels.get("460042139733327903").send(`Nowy serwer: ${guild.name} (id: ${guild.id}). Serwer posiada ${guild.memberCount} użytkowników! Stworzony przez ${guild.owner} (id: ${guild.owner.id} Serwer ma `);
  client.channels.get("457896125287104532").edit({name: client.guilds.size + ` serwerów`});
  client.channels.get("457897749140996116").edit({name:   client.users.size + ` ludzi` });
});
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Zostałem wyrzucony z: ${guild.name} (id: ${guild.id})`);
  const { MessageEmbed } = require("discord.js");
  const info32 = new MessageEmbed()
  .setColor("#00ff00")
  .setDescription(`Wyrzucono mnie z : ${guild.name} (ID:${guild.id} ) `)
  .addField(`Założyciel: ${guild.owner.displayName}`, `(ID: ${guild.owner.id})`)
  .setFooter("Polak Bot 2018")
  .setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
  client.channels.get("462283282441306128").send(info32);
  //client.channels.get("460042139733327903").send(`Zostałem wyrzucony z: ${guild.name} (id: ${guild.id})`);
  client.channels.get("457896125287104532").edit({name: client.guilds.size + ` serwerów`});
  client.channels.get("457897749140996116").edit({name:   client.users.size + ` ludzi` });
});
client.on('guildMemberAdd', member => {
  ////client.channels.get("455983097197101063").send(`Witaj ${member} na Polak Bot Dev! Aby pokazać komendy Polak Bota użyj !komendybota`);
});

client.on('message', msg => {
if(msg.author.id === '331439167881871362') {
if(msg.content === '!purge') {
const user = msg.mentions.users.first();
const amount = !!parseInt(msg.content.split(' ')[1]) ? parseInt(msg.content.split(' ')[1]) : parseInt(msg.content.split(' ')[2])
if (!amount) return msg.reply('Must specify an amount to delete!');
if (!amount && !user) return msg.reply('Must specify a user and amount, or just an amount, of messages to purge!');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = msg.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
}
}
  
  if (msg.content === '!komendybota') {
    msg.react("👍");
    const { MessageEmbed } = require("discord.js");
    const info = new MessageEmbed().setColor("#00ff00").setDescription("Dołacz na Polak Bot Dev:", "https://discord.gg/BU68uUV").addField("Zaproś bota na twój serwer:", "https://discordapp.com/api/oauth2/authorize?client_id=439736168368832512&permissions=8&scope=bot ").addField("Kanał bota na youtube", "https://youtube.com/channel/UC3Sl7FEjDfd2W4VWSljIVbw").addField("Wejdź na strone rkubypl i bota", "http://rkubapl.cba.pl/").setFooter("Polak Bot 2018").setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG").setThumbnail("https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
      msg.author.send(info);
      const fun = new MessageEmbed().setColor("#00ff00").setDescription("Komendy fun:").addField("!rzutkością", "Bot losuje liczbe od 1 do 6").addField("!rzutmonetą", "Bot odpowiada albo Wynik twojego rzutu nonetą to RESZKA albo Wynik twojego rzutu to ORZEŁ") .addField("!gęś", "Przeoonaj sie sam").addField("!cat", "Bot wysyla randomowego kotka:)").addField("!dog", "Bot wysyla zdjecie randomowego psa:)").addField("!car", "Informacje o komendzie !car").setFooter("Polak Bot 2018").setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG").setThumbnail("https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
      msg.author.send(fun);
      const info2 = new MessageEmbed().setColor("#00ff00").setDescription("Komendy Informacyjne:").addField("!bot", "wysyła link do zaproszenia bota na twój serwer").addField("!youtube", "Wyświetla link do kanalu bota na YouTube").addField("!strona", "Wysyła link do strony internetowej").addField("!serwer", "wysyła link do Polak Bot Dev").addField("!awatar", "Wysyła twój awatar").addField("!nowości", "Nowe rzeczy w bocie i wersja bota").setFooter("Polak Bot 2018");
      msg.author.send(info2);
 const mod = new MessageEmbed().setColor("#00ff00").setDescription("Komendy Moderacyjne niedziałające:").addField("!ban", "Banuje").addField("!kick", "Kickuje").setFooter("Polak Bot 2018").setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG").setThumbnail("https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
      msg.author.send(mod);
//      const russia = new MessageEmbed().setColor("#00ff00").setDescription("Komendy mundialowe:").addField("!grupa A-H", "Pokazuje grupe").setFooter("Polak Bot 2018").setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG").setThumbnail("https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
//      msg.author.send(russia);
      msg.reply("Komendy bota zostały wysłane w PW");
      //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);

    }
    
  if (msg.content === '!serwer') {
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    msg.react("👍");
    msg.reply('Dołacz na serwer Polak Bot Dev: https://discord.gg/BU68uUV');
  }
  if (msg.content === '!bot') {
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    msg.react("👍");
    msg.reply('Link do zaproszenia bota na serwer: https://discordapp.com/api/oauth2/authorize?client_id=439736168368832512&permissions=8&scope=bot');
  }
  //if (msg.content === '!twórcy') {
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    //msg.react("👍");  
    // Send "pong" to the same channel
    //const { MessageEmbed } = require("discord.js");

    //const embed = new MessageEmbed().setColor("#00ff00").setDescription("Administracja:").addField("Developer:", "rkubaplYT#6360 ").addField("Niższy developer:", "Patryk Stec#1074 ").addField("Zarządzający botem:", "JakubNBT#6301").addField("Pomocnicy:", "Adam Kowalski#9683 , Olek69#7533 i xCookieTM#9613").setFooter("Polak Bot 2018").setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
    //msg.channel.send(embed);
  //}
  if (msg.content === '!info') {
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    msg.react("👍");
    // Send "pong" to the same channel
    const { MessageEmbed } = require("discord.js");

    const embed = new MessageEmbed().setColor("#00ff00").setDescription("INFORMACJE:").addField("Prefix:", "!")
    .addField("Wersja:", "0.0.9")
    .addField("Autor:", "rkubaplYT#6360").addField("Serwery:", `Jestem na ${client.guilds.size} serwerach!`)
    .addField("Osób:", `Korzysta ze mnie ${client.users.size} ludzi!`).setFooter("Polak Bot 2018")
    .addField("Użycie ram:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("Wersja discord.js", `v${Discord.version}`)
    .addField("Wersja node.js", `${process.version}`)
    .setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
    msg.channel.send(embed);
  }
  //if (msg.content === '!rekrutacja') {
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
  //msg.react("👍");
  //const { MessageEmbed } = require("discord.js");

    //const embed = new MessageEmbed().setColor("#00ff00").setDescription("Rekrutacja:").addField("Nowy pomocnik:", "xCookieTM#9613").setFooter("Polak Bot 2018").setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
    //msg.channel.send(embed);
    
//}
if (msg.content === '!car') {
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
  msg.react("👍");
  const { MessageEmbed } = require("discord.js");

    const embed = new MessageEmbed().setColor("#00ff00").setDescription("!car").addField("Użycie:", "!car 1-10 ").setFooter("Polak Bot 2018").setAuthor("Polak Bot", "https://cdn.discordapp.com/attachments/431065242571767811/448482586772242442/Logo_Polak_Bot_4.0_Final_Edition.PNG");
    msg.channel.send(embed);
    
}

if (msg.content === '!awatar') {
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
  msg.react("👍");
  // Send the user's avatar URL
  msg.reply(msg.author.displayAvatarURL());
}
if (msg.content === '!nowości') {
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
  msg.react("👍");
  const { MessageEmbed } = require("discord.js");

    const embed = new MessageEmbed().setColor("#00ff00").setDescription("!nowości").addField("Wersja:", "0.0.9").addField("Usunięto:", "!twórcy , !rekrutacja").addField("Komendy:", "!rzutkością, !strona, !youtube, !rzutmonetą").addField("Inne:", "Kanał bota na YouTube, Literówki, błędy i aktualizacja starych komend (Usunięte komendy zostaną zaktualizowane w następnej wersji bota)").setFooter("Polak Bot 2018");
    msg.channel.send(embed);
    
}
if (msg.content === '!help') {
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);

  msg.reply('Żeby sie nie mieszało z innymi botami ustawiliśmy !komendybota ');
}
if (msg.author.id === "331439167881871362" ) {
  if (msg.content.startsWith("!gra")) { 
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    client.user.setActivity(`${msg.content.substring(5)}`); 
    msg.reply(`Zmieniono w grze na: ${msg.content.substring(5)}`)
 
  }
}
if (msg.author.id === "331439167881871362" ) {
  if (msg.content.startsWith("!status")) {
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    client.user.setStatus(`${msg.content.substring(8)}`); 
    msg.reply(`Zmieniono status na: ${msg.content.substring(8)}`)
 
  }
}
if (msg.author.id === "331439167881871362" )  {
  if (msg.content.startsWith("!watch")) { 
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    client.user.setActivity(`${msg.content.substring(7)}`); 
    msg.reply(`Zmieniono ogląda na: ${msg.content.substring(7)}`)
 
  }
}
if (msg.author.id === "331439167881871362" )  {
  if (msg.content.startsWith("!stream")) { 
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    client.user.setActivity(`${msg.content.substring(8)}`,"https://www.twitch.tv/rkubapl"); 
    msg.reply(`Zmieniono Streamuje na: ${msg.content.substring(8)}`)
 
  }
}



if (msg.author.id === "331439167881871361" ) {
  if (msg.content.startsWith("!serwery")) {
    //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
    client.user.setActivity(` ${client.guilds.size} serwerów.`); 
    
  }
}


if (msg.content === '!car 1') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448825874431737866/Fiat_126.jpg');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 2') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448825979138473995/bmw_500.jpg');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 3') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448826453434564608/IMG_0260.JPG');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 4') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448826603351310336/IMG_0276.JPG');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 5') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448827200876183592/20170804_135929.jpg');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 6') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448829529696239636/IMG_2451.JPG');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 7') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448829440365953026/IMG_2440.JPG');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 8') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448829421214892032/IMG_2438.JPG');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 9') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448828955986886656/IMG_2462.JPG');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if (msg.content === '!car 10') {
  msg.react("👍");
  msg.reply('https://cdn.discordapp.com/attachments/423189131980570624/448828056845418526/20170831_141952.jpg');
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}




 

//  const swearWords = ["kurwa", "cipa", "dupa", "jebać", "jebac", "pierdole", "dupa", "dupo"];
//if( swearWords.some(word => msg.content.includes(word)) ) {

//msg.reply("Nie przeklinaj!");
//msg.delete();


// Or just do message.delete();


  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName}  (ID: ${msg.member.id} ) na serwerze ${msg.guild.name} użył k



if(msg.content === `!serverinfo`){
  msg.react("👍"); 
  const { MessageEmbed } = require("discord.js");
  const serverembed = new MessageEmbed()
  .setDescription(`Informacje serwera ${msg.guild.name}`)
  .setColor("#15f153")
  .addField("Nazwa serwera", msg.guild.name)
  .addField("Stworzono:", msg.guild.createdAt)
  .addField("liczba użytkowników", msg.guild.memberCount)
  .addField("Kanał AFK", msg.guild.afkChannel)
  .addField("Level weryfikacji", msg.guild.verificationLevel)
  .addField("Region serwera", msg.guild.region)
  .addField("Id serwera", msg.guild.id)
  .addField("Właściciel:", msg.guild.owner);


  return msg.channel.send(serverembed);
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if(msg.content === `!userinfo`){
  msg.react("👍"); 
  const { MessageEmbed } = require("discord.js");
  const serverembed = new MessageEmbed()
  .setDescription(`Informacje użytkownika ${msg.member.displayName}`)
  .setColor("#15f153")
  .addField("Dołaczono na serwer:", msg.member.joinedAt)
  .addField("ID:", msg.member.id)
  .addField("Wyświetlany nick na serwerze:", msg.member.displayName);


  return msg.channel.send(serverembed);
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
}
if(msg.content === `!gęś`){
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
  msg.react("👍"); 
msg.channel.send('Kto pierwszy wpisze `gęś` wygrywa!')
.then(() => {
  msg.channel.awaitMessages(response => response.content === 'gęś', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      msg.reply(` Wygrałeś! Napisałeś: ${collected.first().content}`);
    })
    .catch(() => {
      msg.channel.send('Nikt nie napisał `gęś`!');
    });
    
  
});




}
if(msg.content.startsWith("!reload")) {
  const currentDate = new Date();
  client.channels.get("457896125287104532").edit({name: client.guilds.size + ` serwerów`});
  client.channels.get("457897749140996116").edit({name:   client.users.size + ` ludzi` });
  //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);

}

//if(msg.content === `!pomoc`){
  //msg.react("👍"); 
//client.channels.get("458620107623759873").send(`Uzytkownik ${msg.member.displayName} prosi o pomoc.`);
//client.channels.get("458620107623759873").send(msg.content.substring(7));

//}

//if (msg.content === 'mu!mecz') {
  //msg.react("👍");
  //const { MessageEmbed } = require("discord.js");
  //const info = new MessageEmbed().setColor("#00ff00")
  //.setDescription("Mecz Polska - Litwa:")
  //.addField("Stan: ", "Koniec  ")
  //.addField("Wynik: 3 - 0")
  //.addField("Gole polska:", "Robert Lewandowski 19' i 32` |  Dawid Kornacki 71` | Jakub Błaszczykowski  82` (karny)")
  //.addField("Gole litwa:", "Brak")
  //.addField("Miejsce", "PGE Narodowy, Stadion Narodowy Warszawa")
  //.setAuthor("Rusia 2018");
    //msg.reply(info);

  //}
                                      if (msg.content === '!mecze') {
                                        msg.react("👍");
                                        const { MessageEmbed } = require("discord.js");
                                        const F1 = new MessageEmbed().setColor("#00ff00")
                                        .setDescription("Mecz Polska - Kolumbia:")
                                        .addField("Wynik:", " https://www.fifa.com/worldcup/matches/match/300331508/#match-h2h sprawdź")
                                        .addField("Miejsce:", " Kazan Arena Kazan")
                                        .addField("Rozpoczęcie o:", "20:00 czasu Polskiego 24 czerwca 2018 roku")
                                        .addField("Grupa", "H")
                                        .setAuthor("Rusia 2018");
                                          msg.reply(F1);
                                          //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
                                    
                                        }
                                        if(msg.content === "!ping") {
                                          // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
                                          // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
                                          msg.reply(`Pong! Czas oczekiwania to: ${msg.createdTimestamp - msg.createdTimestamp}ms. Czas oczekiwania API to: ${Math.round(client.ping)}ms`);
                                          //client.channels.get("460509961450029067").send(`Użytkownik ${msg.member.displayName} na serwerze ${msg.guild.name} użył komendy ${msg.content.substring(0)}`);
                                        }
                                      
                                        if (msg.author.id === "331439167881871362" ) {
                                          if (msg.content.startsWith("!admin")) {
                                            
                                            msg.channel.send(`${msg.content.substring(7)}`); 
                                            msg.delete();
                                            
                                         
                                          }
                                        }
                                        if(msg.content === '!8ball'){
                                          if(!args[2]) return msg.reply(":wink: Musisz podać pełne pytanie!");
                                          const replies = ["Yes of course...", "No..", "How can I know that?", "Możesz zapytać później?"];
                                      
                                          const result = Math.floor((Math.random() * replies.length));
                                          const question = args.slice(0).join(" ");
                                          const { MessageEmbed } = require("discord.js");
                                          const ball = new MessageEmbed()
                                          .setAuthor(`${msg.author.tag}`, `${msg.author.displayAvatarURL}`)
                                          .setColor("#00ff00")
                                          .setDescription(question)
                                          //.addField("Pytanie", question)
                                          .addField("Odpowiedź:", replies[result]);
                                      
                                          msg.channel.send(ball);
                                          return;
                                        }
                                        if(msg.content === '!gra') {
                                          if(msg.author.id !== '331439167881871362') return msg.reply("Nie masz uprawnień")
                                          client.user.setActivity(args.join(" "));
                                        }
                                        if(msg.content === '!generuj') {
                                         // msg.channel.send(args.join(" ").toUpperCase().replace(/A/g, ":regional_indicator_a: ").replace(/B/g, ":regional_indicator_b: ").replace(/C/g, ":regional_indicator_c: ").replace(/D/g, ":regional_indicator_d: ").replace(/E/g, ":regional_indicator_e: ").replace(/F/g, ":regional_indicator_f: ").replace(/G/g, ":regional_indicator_g: ").replace(/H/g, ":regional_indicator_h: ").replace(/I/g, ":regional_indicator_i: ").replace(/J/g, ":regional_indicator_j: ").replace(/K/g, ":regional_indicator_k: ").replace(/L/g, ":regional_indicator_l: ").replace(/M/g, ":regional_indicator_m: ").replace(/N/g, ":regional_indicator_n: ").replace(/O/g, ":regional_indicator_o: ").replace(/P/g, ":regional_indicator_p: ").replace(/Q/g, ":regional_indicator_q: ").replace(/R/g, ":regional_indicator_r: ").replace(/S/g, ":regional_indicator_s: ").replace(/T/g, ":regional_indicator_t: ").replace(/U/g, ":regional_indicator_u: ").replace(/V/g, ":regional_indicator_v: ").replace(/W/g, ":regional_indicator_w: ").replace(/X/g, ":regional_indicator_x: ").replace(/Y/g, ":regional_indicator_y: ").replace(/Z/g, ":regional_indicator_z: "))
msg.channel.send(`Wygenerowano: discordapp.com/oauth2/authorize?client_id=439736168368832512&permissions=${msg.content.substring(9)}&scope=bot`);
}
//if(msg.content === '!clear') {
//i5f(!msg.member.has.permission("MANAGE_MESSAGES")) return msg.reply("Brak permisji.");
  //if(!msg.content.substring(0)) return msg.channel.send("hmm");
  //msg.channel.bulkDelete(msg.substring(7).then(() => {
//  msg.channel.send(`Usunięto  ${msg.substring(7)} wiadomości.`).then(msg => msg.delete(2000));
if (msg.content == '!rzutkością') {
var rzut = Math.floor(Math.random() * 6 + 1);
msg.channel.send("Wyrzuciłeś " + rzut);
}

//}
//)}
if (msg.content === '!strona') {
msg.channel.send("http://rkubapl.cba.pl");
}
if (msg.content === '!youtube') {
msg.channel.send("Zapraszam na kanal Polak Bota na Youtube https://m.youtube.com/channel/UC3Sl7FEjDfd2W4VWSljIVbw");
}
if (msg.content === '!rzutmonetą') {
//msg.reply("Wylaczono ta komende");
var coinToss = Math.random();
(coinToss > 0.5) ? "Twój rzut monetą to RESZKA" : "Twój rzut monetą to ORZEŁ";

//RZUT MONETĄ IF, IF ELSE

var coinToss = Math.random();

    if (coinToss < 0.5) {
        msg.channel.send("Wynik twojego rzutu to ORZEŁ");
    } else {
        msg.channel.send("Wynik twojego rzutu monetą to RESZKA");
    }
}
if (msg.content === '!cat') {
function image() {
                 };

                 image = new image();
                 number = 0;

                 //image[number++] = "http://rkubapl.cba.pl/kot1.jpg"
                 //image[number++] = "http://rkubapl.cba.pl/kot4.jpg"
                 //image[number++] = "http://rkubapl.cba.pl/kot3.jpg"
                 //image[number++] = "http://rkubapl.cba.pl/kot2.jpg"
image[number++] = "http://rkubapl.cba.pl/kot5.jpg"
image[number++] = "http://rkubapl.cba.pl/kot6.jpeg"
image[number++] = "http://rkubapl.cba.pl/kot8.jpg"
image[number++] = "http://rkubapl.cba.pl/kot7.jpg"
image[number++] = "http://rkubapl.cba.pl/kot9.jpg"
                 increment = Math.floor(Math.random() * number);

                 msg.channel.send("Wiekszosc zdjec jest ze strony http://pxhere.com  " + image[increment]);
}
if (msg.content === '!dog') {
function image() {
                 };

                 image = new image();
                 number = 0;

                 image[number++] = "http://rkubapl.cba.pl/pies1.jpg"
                 image[number++] = "http://rkubapl.cba.pl/pies2.jpg"
                 image[number++] = "http://rkubapl.cba.pl/pies3.jpg"
                 image[number++] = "http://rkubapl.cba.pl/pies4.jpg"

                 increment = Math.floor(Math.random() * number);

                 msg.channel.send("Większosc zdjec jest ze strony http://pxhere.com " + image[increment]);
}
//if (msg.content === '!grgml') {
//msg.reply("Wylaczono ta komende");
//var coinToss = Math.random();
//coinToss > 0.5) ? "Twój rzut monetą to RESZKA" : "Twój rzut monetą to ORZEŁ"
//RZUT MONETĄ IF, IF ELSE

//var coinToss = Math.random();

//    if (coinToss < 0.5) {
//        msg.channel.send("DOPRĘ POMARAŃCZE");
//    } else {
//        msg.channel.send("Dopre ogõrka");
 //}
});

                               





client.login('token');
//client.login('token');
