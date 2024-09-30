const { Client, SelectMenuInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
module.exports = {
    data: {
        name: 'name' //name of your selectmenu
    },
    /**
     * @param {SelectMenuInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { customId, values } = interaction; //required for interaction

   //below is example of logic behind seletmenu you can edit
 /* if (customId === 'name') {
    // Handle the selected values based on the options in the menu
    if (values.includes('sm1')) {
      await interaction.reply({ embeds: [e1], components: [b1], ephemeral: true });
    } else if (values.includes('sm2')) {
      await interaction.reply({ embeds: [e2], components: [b2], ephemeral: true });
    }
  } */
    }
}