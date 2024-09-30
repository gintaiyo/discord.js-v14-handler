const { Client, Collection, GatewayIntentBits, Partials, Events, EmbedBuilder, ChannelType } = require("discord.js");
const { User, GuildMember, GuildScheduledEvent, Message, Reaction, ThreadMember, Channel } = Partials
const { Guilds, GuildMembers, GuildMessages, GuildVoiceStates, DirectMessages, GuildMessageReactions, GuildEmojisAndStickers, GuildWebhooks, GuildIntegrations, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMembers, GuildMessages, GuildVoiceStates, DirectMessages, GuildMessageReactions, GuildEmojisAndStickers, GuildWebhooks, GuildIntegrations, MessageContent], partials: [User, Message, GuildMember, ThreadMember, GuildScheduledEvent, Reaction, Channel] });

//client configs
client.config = require('./config.json')
client.color = parseInt(client.config.color.replace("#", "0x"))

module.exports = client;

/* Client Collections */
client.voiceGenerator = new Collection();
client.commands = new Collection();
client.modals = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();

/* Discord Handler */
const { loadEvents } = require('./src/handlers/EventHandler')
const { loadCommands } = require('./src/handlers/CommandHandler.js');
const { loadComponents } = require('./src/handlers/ComponentHandler');

/* Client Login */
client.login(client.config.token)
.then(() => {
    /* Start Handler */
    loadEvents(client);
    loadCommands(client);
    loadComponents(client);
    console.log("ready")
})


//anti error
process.on('uncaughtExceptionMonitor', error => {
    console.error(`[ANTI - CRASH] ${error} `);
  });
  process.on('unhandledRejection', (reason, promise) => {
      console.error(`[ANTI - CRASH] ${reason}, ${promise}`)
  });
  process.on("uncaughtException", error => {
    console.error(`[ANTI - CRASH] ${error} `);
  });
  
  process.on('beforeExit', code => {
    console.error(`[ANTI - CRASH] ${code}`);
  });
  
  process.on('exit', code => {
    console.error(`[ANTI - CRASH] ${code} `);
  });