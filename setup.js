const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "Токен",
prefix: "Префикс любой",
intents: "all"
})

//Events
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

// ru Создайте папку "commands" и в папке commands создовайте команды!

//Пример команды (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Готовое событие
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
