const { Client: Discord, Collection: MapExtend } = require("discord.js");
const env = require("../env/Environment");
const Worker = require("./Worker");

class Client extends Discord {
    constructor () {
        super(env.clientOpt);

        this.commands = new MapExtend();
        this.aliases = new MapExtend();

        this.env = env;

        this.worker = new Worker(this);
    };

    /**
     * @param {string} token
     */
    login (token = String) {

        this.worker.start();
        super.login(token);
    };
};

module.exports = Client;