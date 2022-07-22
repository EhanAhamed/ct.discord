/*!
 * ct.discord v1.0.0 (https://github.com/EhanAhamed/ct.discord/)
 * Copyright (c) 2022 Ehan Ahamed and contributors (https://github.com/EhanAhamed/ct.discord/graphs/contributors)
 * Licensed under MIT (https://github.com/EhanAhamed/ct.discord/blob/main/LICENSE.txt)
 */

ct.discord = {
  Client: RPCClient,
  register(id) {
    return util.register("discord-" + id);
  },
};
