const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "DISCRD BOT TOKEN",
prefix: "DISCRD BOT PREFIX",
intents: "all"
})

//Events
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

// ru Создайте папку "commands" и в папке commands создовайте команды!
// en Create a "commands" folder and in the commands folder create commands!

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
