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

/* discord-rpc/util.js */

"use strict";

let register;
try {
  const { app } = require("electron");
  register = app.setAsDefaultProtocolClient.bind(app);
} catch (err) {
  try {
    register = require("register-scheme");
  } catch (e) {} // eslint-disable-line no-empty
}

if (typeof register !== "function") {
  register = () => false;
}

function pid() {
  if (typeof process !== "undefined") {
    return process.pid;
  }
  return null;
}

const uuid4122 = () => {
  let uuid = "";
  for (let i = 0; i < 32; i += 1) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }
    let n;
    if (i === 12) {
      n = 4;
    } else {
      const random = (Math.random() * 16) | 0;
      if (i === 16) {
        n = (random & 3) | 0;
      } else {
        n = random;
      }
    }
    uuid += n.toString(16);
  }
  return uuid;
};

util = {
  pid,
  register,
  uuid: uuid4122,
};
