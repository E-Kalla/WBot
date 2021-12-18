const { Client, CommandInteraction } = require("discord.js")

/**
 * 
 * @param {ClientTypes} client 
 * @param {CommandInteraction} interaction 
 */
const handleCommand = async (client, interaction) => {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error)
        await interaction.reply({content: "an error occured while trying to execute the command", ephemeral: true})
    }
}

module.exports = handleCommand;