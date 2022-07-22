/*!
 * Discord.js RPC Extension v4.0.1 (https://github.com/discordjs/RPC/)
 * Copyright (c) 2022 devsnek (https://github.com/discordjs/RPC/graphs/contributors)
 * Licensed under MIT (https://github.com/discordjs/RPC/blob/master/LICENSE)
 * 
 * Modified by Ehan Ahamed and contributors (https://github.com/EhanAhamed/ct.discord/graphs/contributors)
 * Modified for use in ct.js (https://github.com/ct-js/ct-js)
 * Modified Source Code is Licensed under MIT (https://github.com/EhanAhamed/ct.discord/blob/main/LICENSE.txt)
 */

/* transports/index.js */

"use strict";

transports = {
  ipc: ipc,
  websocket: WebSocketTransport,
};
