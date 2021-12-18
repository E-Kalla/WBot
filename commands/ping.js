const { CommandInteraction } = require("discord.js");

const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Verify if bot is available or not'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        await interaction.reply('Pong');

        const message = await interaction.fetchReply();

        return interaction.editReply(`Your ping:  ${interaction.client.ws.ping} ms`)
    }
}