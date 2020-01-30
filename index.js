const Discord = require('discord.js')

const client = new Discord.Client()
console.log(process.env.TOKEN)
client.login(process.env.TOKEN)
client.on('message', msg => {
    const guildTag = msg.channel.type === 'text' ? `[${msg.guild.name}]` : '[DM]'
    const channelTag = msg.channel.type === 'text' ? `[#${msg.channel.name}]` : ''
    console.log(`${guildTag}${channelTag} ${msg.author.tag} : ${msg.content}`)
})