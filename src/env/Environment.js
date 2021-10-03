const { Intents } = require("discord.js");

const env = {
    /**
     * @type {import("discord.js").ClientOptions}
     */
    clientOpt: {
        intents: [
            Intents["FLAGS"]["GUILDS"],
            Intents["FLAGS"]["GUILD_MESSAGES"]
        ],
        allowedMentions: {
            parse: ["everyone"]
        }
    },
    eventOpt: {
        name: "",
        once: false
    },
    path: {
        "events": "./src/core/events/**/**/*.js"
    },
    token: ""
};

module.exports = env;