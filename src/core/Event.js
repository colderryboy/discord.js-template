const Client = require("../structures/Client");
const { eventOpt} = require("../env/environment");

class Event {
    /**
     * @param {Client} client 
     * @param {eventOpt} opt
     */
    constructor(client, opt) {

        this.client = client;
        this.name = opt.name;
        this.once = opt.once;
    };

    run (...args) {
        return;
    };
};

module.exports = Event;