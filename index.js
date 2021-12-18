const dotenv = require('dotenv')
const {Collection, Intents, Client, Interaction} = require ('discord.js')
const fs = require ('fs')

const handleCommand = require('./helpers/commands')
dotenv.config()

const allIntents = new Intents(32767);
const client = new Client({
    intents: allIntents 
})

client.commands = new Collection
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) handleCommand(client, interaction)
});

client.on('ready', () => {
    console.log('The Bot is ready')
})

client.login(process.env.TOKEN)