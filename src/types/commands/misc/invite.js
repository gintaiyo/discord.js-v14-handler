const { Client, SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('Invite Me 😄')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const inv = new ButtonBuilder()
        .setLabel("Invite")
        .setEmoji("➕")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot+applications.commands`)
        .setStyle(ButtonStyle.Link);
        
        const row = new ActionRowBuilder()
        .addComponents(inv);
        
        const roll = [
            "Thank you for permitting— No, inviting me to join you.",
            "The pleasure is all mine.",
            " Perhaps we could take a walk by a riverbank or somewhere similarly fluvial."
        ];
        const rick = roll[Math.floor(Math.random() * roll.length)];
        
        const em = new EmbedBuilder()
        .setColor(client.color)
        .setTitle("➕ Invite")
        .setThumbnail(client.user.avatarURL())
        .setDescription(rick)
        .setTimestamp()
        
        await interaction.reply({embeds: [em], components: [row]})
    }
}