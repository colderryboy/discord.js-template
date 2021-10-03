const Client = require("./Client");
const Event = require("../core/Event");
const glob = require("glob");
const path = require("path");

class Module {
    /**
     * @param {Client} client 
     */
    constructor(client) {
        this.client = client;
    };
    
    /**
     * @private
     * @returns
     */
    setEvents () {

        return glob(this.client.env.path.events, (err, match) => {

            if (err) {
                return;
            };

            match.forEach(file => {

                try {

                    const event = new (require(path.resolve(file)))(this.client);

                    if (!(event instanceof Event)) {
                        return;
                    };

                    if (event.name) {

                        if (event.once) {
                            this.client.once(event.name, (...args) => event.run(...args));
                        } else {
                            this.client.on(event.name, (...args) => event.run(...args));
                        };

                    };

                } catch (e) {
                    return;
                };

            });
        });
    };
};

module.exports = Module;