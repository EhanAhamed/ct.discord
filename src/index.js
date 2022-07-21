const util = require("./include/discord-rpc/util.js")

ct.discord = {
    Client: require("./include/discord-rpc/client.js"),
    register(id) {
        return util.register("discord-"+id);
    }
};
