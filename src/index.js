ct.discord = {
    Client: RPCClient,
    register(id) {
        return util.register("discord-"+id);
    }
};
