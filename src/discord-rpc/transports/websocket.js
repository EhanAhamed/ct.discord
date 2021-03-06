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

/* discord-rpc/transports/websocket.js */

/*
"use strict"; stated in constants.js
*/

/*
EventEmitter is Defined in discord-rpc/transports/ipc.js
*/
/*
constants.browser is Defined in discord-rpc/constants.js
*/
const browser = constants.browser;

// eslint-disable-next-line
const WebSocket = browser ? window.WebSocket : require("ws");

const pack = (d) => JSON.stringify(d);
const unpack = (s) => JSON.parse(s);

class WebSocketTransport extends EventEmitter {
  constructor(client) {
    super();
    this.client = client;
    this.ws = null;
    this.tries = 0;
  }

  async connect() {
    const port = 6463 + (this.tries % 10);
    this.tries += 1;

    this.ws = new WebSocket(
      `ws://127.0.0.1:${port}/?v=1&client_id=${this.client.clientId}`,
      browser ? undefined : { origin: this.client.options.origin }
    );
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
  }

  onOpen() {
    this.emit("open");
  }

  onClose(event) {
    if (!event.wasClean) {
      return;
    }
    this.emit("close", event);
  }

  onError(event) {
    try {
      this.ws.close();
    } catch {} // eslint-disable-line no-empty

    if (this.tries > 20) {
      this.emit("error", event.error);
    } else {
      setTimeout(() => {
        this.connect();
      }, 250);
    }
  }

  onMessage(event) {
    this.emit("message", unpack(event.data));
  }

  send(data) {
    this.ws.send(pack(data));
  }

  ping() {} // eslint-disable-line no-empty-function

  close() {
    return new Promise((r) => {
      this.once("close", r);
      this.ws.close();
    });
  }
}
