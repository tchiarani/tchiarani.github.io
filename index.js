const Discord = require('assets/js/discord.11.5.0.min.js')

const client = new Discord.Client()
console.log(process)
console.log($TOKEN)
client.login(process.env.TOKEN)
client.on('message', msg => {
    const guildTag = msg.channel.type === 'text' ? `[${msg.guild.name}]` : '[DM]'
    const channelTag = msg.channel.type === 'text' ? `[#${msg.channel.name}]` : ''
    console.log(`${guildTag}${channelTag} ${msg.author.tag} : ${msg.content}`)
});