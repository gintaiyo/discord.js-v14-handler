const { ButtonInteraction, Client, AttachmentBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: "name" //name of button which you put on CustomId
    },
    /**
     * 
     * @param {ButtonInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { guildId, message, member } = interaction; //things required for interaction
        //your code
        
    }
}