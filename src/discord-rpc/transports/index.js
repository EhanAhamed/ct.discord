/*!
 * Discord.js RPC Extension v4.0.1 (https://github.com/discordjs/RPC/)
 * Copyright (c) 2022 devsnek (https://github.com/discordjs/RPC/graphs/contributors)
 * Licensed under MIT (https://github.com/discordjs/RPC/blob/master/LICENSE)
 *
 * Modified by Ehan Ahamed and contributors (https://github.com/EhanAhamed/ct.discord/graphs/contributors)
 * Modified for use in ct.js (https://github.com/ct-js/ct-js),
 * through the ct.js module, ct.discord (https://github.com/EhanAhamed/ct.discord)
 * Modified Source Code is Licensed under MIT (https://github.com/EhanAhamed/ct.discord/blob/main/LICENSE.txt)
 */

/* discord-rpc/transports/index.js */

"use strict";

/*
ipc is defined in discord-rpc/transports/ipc.js
*/
/*
WebSocketTransport is defined in discord-rpc/transports/websocket.js
*/

transports = {
  ipc: ipc,
  websocket: WebSocketTransport,
};
