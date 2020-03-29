const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`O bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores. `);
    client.user.setGame(`Estou em ${client.guild.size} servidores`);
});

client.on("guildCreat", guild => {
    console.log(`O Bot entrou no servidor ${guild.id}. Poupulação: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`)
});


client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id}))`);
});

client.on("message", async message => {


});

client.login(config.token);