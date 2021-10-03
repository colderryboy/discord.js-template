const Client = require("./structures/Client");
const client = new Client();

client.login(client.env.token);