const Client = require("../structures/Client");
const Module = require("./Module");

class Worker extends Module {
    /**
     * @param {Client} client 
     */
    constructor(client) {
        super(client);
        this.client = client;
    };

    start () {
        this.setEvents();
    };
};

module.exports = Worker;