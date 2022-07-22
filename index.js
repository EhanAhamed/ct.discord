'use strict';

function keyMirror(arr) {
  const tmp = {};
  for (const value of arr) {
    tmp[value] = value;
  }
  return tmp;
}


constants.browser = typeof window !== 'undefined';

constants.RPCCommands = keyMirror([
  'DISPATCH',
  'AUTHORIZE',
  'AUTHENTICATE',
  'GET_GUILD',
  'GET_GUILDS',
  'GET_CHANNEL',
  'GET_CHANNELS',
  'CREATE_CHANNEL_INVITE',
  'GET_RELATIONSHIPS',
  'GET_USER',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
  'SET_USER_VOICE_SETTINGS',
  'SET_USER_VOICE_SETTINGS_2',
  'SELECT_VOICE_CHANNEL',
  'GET_SELECTED_VOICE_CHANNEL',
  'SELECT_TEXT_CHANNEL',
  'GET_VOICE_SETTINGS',
  'SET_VOICE_SETTINGS_2',
  'SET_VOICE_SETTINGS',
  'CAPTURE_SHORTCUT',
  'SET_ACTIVITY',
  'SEND_ACTIVITY_JOIN_INVITE',
  'CLOSE_ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_INVITE_USER',
  'ACCEPT_ACTIVITY_INVITE',
  'INVITE_BROWSER',
  'DEEP_LINK',
  'CONNECTIONS_CALLBACK',
  'BRAINTREE_POPUP_BRIDGE_CALLBACK',
  'GIFT_CODE_BROWSER',
  'GUILD_TEMPLATE_BROWSER',
  'OVERLAY',
  'BROWSER_HANDOFF',
  'SET_CERTIFIED_DEVICES',
  'GET_IMAGE',
  'CREATE_LOBBY',
  'UPDATE_LOBBY',
  'DELETE_LOBBY',
  'UPDATE_LOBBY_MEMBER',
  'CONNECT_TO_LOBBY',
  'DISCONNECT_FROM_LOBBY',
  'SEND_TO_LOBBY',
  'SEARCH_LOBBIES',
  'CONNECT_TO_LOBBY_VOICE',
  'DISCONNECT_FROM_LOBBY_VOICE',
  'SET_OVERLAY_LOCKED',
  'OPEN_OVERLAY_ACTIVITY_INVITE',
  'OPEN_OVERLAY_GUILD_INVITE',
  'OPEN_OVERLAY_VOICE_SETTINGS',
  'VALIDATE_APPLICATION',
  'GET_ENTITLEMENT_TICKET',
  'GET_APPLICATION_TICKET',
  'START_PURCHASE',
  'GET_SKUS',
  'GET_ENTITLEMENTS',
  'GET_NETWORKING_CONFIG',
  'NETWORKING_SYSTEM_METRICS',
  'NETWORKING_PEER_METRICS',
  'NETWORKING_CREATE_TOKEN',
  'SET_USER_ACHIEVEMENT',
  'GET_USER_ACHIEVEMENTS',
]);

constants.RPCEvents = keyMirror([
  'CURRENT_USER_UPDATE',
  'GUILD_STATUS',
  'GUILD_CREATE',
  'CHANNEL_CREATE',
  'RELATIONSHIP_UPDATE',
  'VOICE_CHANNEL_SELECT',
  'VOICE_STATE_CREATE',
  'VOICE_STATE_DELETE',
  'VOICE_STATE_UPDATE',
  'VOICE_SETTINGS_UPDATE',
  'VOICE_SETTINGS_UPDATE_2',
  'VOICE_CONNECTION_STATUS',
  'SPEAKING_START',
  'SPEAKING_STOP',
  'GAME_JOIN',
  'GAME_SPECTATE',
  'ACTIVITY_JOIN',
  'ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_SPECTATE',
  'ACTIVITY_INVITE',
  'NOTIFICATION_CREATE',
  'MESSAGE_CREATE',
  'MESSAGE_UPDATE',
  'MESSAGE_DELETE',
  'LOBBY_DELETE',
  'LOBBY_UPDATE',
  'LOBBY_MEMBER_CONNECT',
  'LOBBY_MEMBER_DISCONNECT',
  'LOBBY_MEMBER_UPDATE',
  'LOBBY_MESSAGE',
  'CAPTURE_SHORTCUT_CHANGE',
  'OVERLAY',
  'OVERLAY_UPDATE',
  'ENTITLEMENT_CREATE',
  'ENTITLEMENT_DELETE',
  'USER_ACHIEVEMENT_UPDATE',
  'READY',
  'ERROR',
]);

constants.RPCErrors = {
  CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
  GET_GUILD_TIMED_OUT: 5002,
  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
  INVALID_ACTIVITY_SECRET: 5005,
  INVALID_CHANNEL: 4005,
  INVALID_CLIENTID: 4007,
  INVALID_COMMAND: 4002,
  INVALID_ENTITLEMENT: 4015,
  INVALID_EVENT: 4004,
  INVALID_GIFT_CODE: 4016,
  INVALID_GUILD: 4003,
  INVALID_INVITE: 4011,
  INVALID_LOBBY: 4013,
  INVALID_LOBBY_SECRET: 4014,
  INVALID_ORIGIN: 4008,
  INVALID_PAYLOAD: 4000,
  INVALID_PERMISSIONS: 4006,
  INVALID_TOKEN: 4009,
  INVALID_USER: 4010,
  LOBBY_FULL: 5007,
  NO_ELIGIBLE_ACTIVITY: 5006,
  OAUTH2_ERROR: 5000,
  PURCHASE_CANCELED: 5008,
  PURCHASE_ERROR: 5009,
  RATE_LIMITED: 5011,
  SELECT_CHANNEL_TIMED_OUT: 5001,
  SELECT_VOICE_FORCE_REQUIRED: 5003,
  SERVICE_UNAVAILABLE: 1001,
  TRANSACTION_ABORTED: 1002,
  UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
  UNKNOWN_ERROR: 1000,
};

constants.RPCCloseCodes = {
  CLOSE_NORMAL: 1000,
  CLOSE_UNSUPPORTED: 1003,
  CLOSE_ABNORMAL: 1006,
  INVALID_CLIENTID: 4000,
  INVALID_ORIGIN: 4001,
  RATELIMITED: 4002,
  TOKEN_REVOKED: 4003,
  INVALID_VERSION: 4004,
  INVALID_ENCODING: 4005,
};

constants.LobbyTypes = {
  PRIVATE: 1,
  PUBLIC: 2,
};

constants.RelationshipTypes = {
  NONE: 0,
  FRIEND: 1,
  BLOCKED: 2,
  PENDING_INCOMING: 3,
  PENDING_OUTGOING: 4,
  IMPLICIT: 5,
};
'use strict';

let register;
try {
  const { app } = require('electron');
  register = app.setAsDefaultProtocolClient.bind(app);
} catch (err) {
  try {
    register = require('register-scheme');
  } catch (e) {} // eslint-disable-line no-empty
}

if (typeof register !== 'function') {
  register = () => false;
}

function pid() {
  if (typeof process !== 'undefined') {
    return process.pid;
  }
  return null;
}

const uuid4122 = () => {
  let uuid = '';
  for (let i = 0; i < 32; i += 1) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    let n;
    if (i === 12) {
      n = 4;
    } else {
      const random = Math.random() * 16 | 0;
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
}
'use strict';

const net = require('net');
const EventEmitter = require('events');
const fetch = require('node-fetch');
const uuid = util.uuid;

const OPCodes = {
  HANDSHAKE: 0,
  FRAME: 1,
  CLOSE: 2,
  PING: 3,
  PONG: 4,
};

function getIPCPath(id) {
  if (process.platform === 'win32') {
    return `\\\\?\\pipe\\discord-ipc-${id}`;
  }
  const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;
  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || '/tmp';
  return `${prefix.replace(/\/$/, '')}/discord-ipc-${id}`;
}

function getIPC(id = 0) {
  return new Promise((resolve, reject) => {
    const path = getIPCPath(id);
    const onerror = () => {
      if (id < 10) {
        resolve(getIPC(id + 1));
      } else {
        reject(new Error('Could not connect'));
      }
    };
    const sock = net.createConnection(path, () => {
      sock.removeListener('error', onerror);
      resolve(sock);
    });
    sock.once('error', onerror);
  });
}

async function findEndpoint(tries = 0) {
  if (tries > 30) {
    throw new Error('Could not find endpoint');
  }
  const endpoint = `http://127.0.0.1:${6463 + (tries % 10)}`;
  try {
    const r = await fetch(endpoint);
    if (r.status === 404) {
      return endpoint;
    }
    return findEndpoint(tries + 1);
  } catch (e) {
    return findEndpoint(tries + 1);
  }
}

function encode(op, data) {
  data = JSON.stringify(data);
  const len = Buffer.byteLength(data);
  const packet = Buffer.alloc(8 + len);
  packet.writeInt32LE(op, 0);
  packet.writeInt32LE(len, 4);
  packet.write(data, 8, len);
  return packet;
}

const working = {
  full: '',
  op: undefined,
};

function decode(socket, callback) {
  const packet = socket.read();
  if (!packet) {
    return;
  }

  let { op } = working;
  let raw;
  if (working.full === '') {
    op = working.op = packet.readInt32LE(0);
    const len = packet.readInt32LE(4);
    raw = packet.slice(8, len + 8);
  } else {
    raw = packet.toString();
  }

  try {
    const data = JSON.parse(working.full + raw);
    callback({ op, data }); // eslint-disable-line callback-return
    working.full = '';
    working.op = undefined;
  } catch (err) {
    working.full += raw;
  }

  decode(socket, callback);
}

class IPCTransport extends EventEmitter {
  constructor(client) {
    super();
    this.client = client;
    this.socket = null;
  }

  async connect() {
    const socket = this.socket = await getIPC();
    socket.on('close', this.onClose.bind(this));
    socket.on('error', this.onClose.bind(this));
    this.emit('open');
    socket.write(encode(OPCodes.HANDSHAKE, {
      v: 1,
      client_id: this.client.clientId,
    }));
    socket.pause();
    socket.on('readable', () => {
      decode(socket, ({ op, data }) => {
        switch (op) {
          case OPCodes.PING:
            this.send(data, OPCodes.PONG);
            break;
          case OPCodes.FRAME:
            if (!data) {
              return;
            }
            if (data.cmd === 'AUTHORIZE' && data.evt !== 'ERROR') {
              findEndpoint()
                .then((endpoint) => {
                  this.client.request.endpoint = endpoint;
                })
                .catch((e) => {
                  this.client.emit('error', e);
                });
            }
            this.emit('message', data);
            break;
          case OPCodes.CLOSE:
            this.emit('close', data);
            break;
          default:
            break;
        }
      });
    });
  }

  onClose(e) {
    this.emit('close', e);
  }

  send(data, op = OPCodes.FRAME) {
    this.socket.write(encode(op, data));
  }

  async close() {
    return new Promise((r) => {
      this.once('close', r);
      this.send({}, OPCodes.CLOSE);
      this.socket.end();
    });
  }

  ping() {
    this.send(uuid(), OPCodes.PING);
  }
}

ipc = IPCTransport;
ipc.encode = encode;
ipc.decode = decode;
'use strict';

const EventEmitter = require('events');
const browser = constants.browser;

// eslint-disable-next-line
const WebSocket = browser ? window.WebSocket : require('ws');

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
      browser ? undefined : { origin: this.client.options.origin },
    );
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
  }

  onOpen() {
    this.emit('open');
  }

  onClose(event) {
    if (!event.wasClean) {
      return;
    }
    this.emit('close', event);
  }

  onError(event) {
    try {
      this.ws.close();
    } catch {} // eslint-disable-line no-empty

    if (this.tries > 20) {
      this.emit('error', event.error);
    } else {
      setTimeout(() => {
        this.connect();
      }, 250);
    }
  }

  onMessage(event) {
    this.emit('message', unpack(event.data));
  }

  send(data) {
    this.ws.send(pack(data));
  }

  ping() {} // eslint-disable-line no-empty-function

  close() {
    return new Promise((r) => {
      this.once('close', r);
      this.ws.close();
    });
  }
}
'use strict';

transports = {
  ipc: ipc,
  websocket: WebSocketTransport
};'use strict';

const EventEmitter = require('events');
const { setTimeout, clearTimeout } = require('timers');
const fetch = require('node-fetch');
const RPCCommands = constants.RPCCommands;
const RPCEvents = constants.RPCEvents;
const RelationshipTypes = constants.RelationshipTypes
const getPid = util.pid

function subKey(event, args) {
  return `${event}${JSON.stringify(args)}`;
}

/**
 * @typedef {RPCClientOptions}
 * @extends {ClientOptions}
 * @prop {string} transport RPC transport. one of `ipc` or `websocket`
 */

/**
 * The main hub for interacting with Discord RPC
 * @extends {BaseClient}
 */
class RPCClient extends EventEmitter {
  /**
   * @param {RPCClientOptions} [options] Options for the client.
   * You must provide a transport
   */
  constructor(options = {}) {
    super();

    this.options = options;

    this.accessToken = null;
    this.clientId = null;

    /**
     * Application used in this client
     * @type {?ClientApplication}
     */
    this.application = null;

    /**
     * User used in this application
     * @type {?User}
     */
    this.user = null;

    const Transport = transports[options.transport];
    if (!Transport) {
      throw new TypeError('RPC_INVALID_TRANSPORT', options.transport);
    }

    this.fetch = (method, path, { data, query } = {}) =>
      fetch(`${this.fetch.endpoint}${path}${query ? new URLSearchParams(query) : ''}`, {
        method,
        body: data,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }).then(async (r) => {
        const body = await r.json();
        if (!r.ok) {
          const e = new Error(r.status);
          e.body = body;
          throw e;
        }
        return body;
      });

    this.fetch.endpoint = 'https://discord.com/api';

    /**
     * Raw transport userd
     * @type {RPCTransport}
     * @private
     */
    this.transport = new Transport(this);
    this.transport.on('message', this._onRpcMessage.bind(this));

    /**
     * Map of nonces being expected from the transport
     * @type {Map}
     * @private
     */
    this._expecting = new Map();

    this._connectPromise = undefined;
  }

  /**
   * Search and connect to RPC
   */
  connect(clientId) {
    if (this._connectPromise) {
      return this._connectPromise;
    }
    this._connectPromise = new Promise((resolve, reject) => {
      this.clientId = clientId;
      const timeout = setTimeout(() => reject(new Error('RPC_CONNECTION_TIMEOUT')), 10e3);
      timeout.unref();
      this.once('connected', () => {
        clearTimeout(timeout);
        resolve(this);
      });
      this.transport.once('close', () => {
        this._expecting.forEach((e) => {
          e.reject(new Error('connection closed'));
        });
        this.emit('disconnected');
        reject(new Error('connection closed'));
      });
      this.transport.connect().catch(reject);
    });
    return this._connectPromise;
  }

  /**
   * @typedef {RPCLoginOptions}
   * @param {string} clientId Client ID
   * @param {string} [clientSecret] Client secret
   * @param {string} [accessToken] Access token
   * @param {string} [rpcToken] RPC token
   * @param {string} [tokenEndpoint] Token endpoint
   * @param {string[]} [scopes] Scopes to authorize with
   */

  /**
   * Performs authentication flow. Automatically calls Client#connect if needed.
   * @param {RPCLoginOptions} options Options for authentication.
   * At least one property must be provided to perform login.
   * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
   * @returns {Promise<RPCClient>}
   */
  async login(options = {}) {
    let { clientId, accessToken } = options;
    await this.connect(clientId);
    if (!options.scopes) {
      this.emit('ready');
      return this;
    }
    if (!accessToken) {
      accessToken = await this.authorize(options);
    }
    return this.authenticate(accessToken);
  }

  /**
   * Request
   * @param {string} cmd Command
   * @param {Object} [args={}] Arguments
   * @param {string} [evt] Event
   * @returns {Promise}
   * @private
   */
  request(cmd, args, evt) {
    return new Promise((resolve, reject) => {
      const nonce = uuid();
      this.transport.send({ cmd, args, evt, nonce });
      this._expecting.set(nonce, { resolve, reject });
    });
  }

  /**
   * Message handler
   * @param {Object} message message
   * @private
   */
  _onRpcMessage(message) {
    if (message.cmd === RPCCommands.DISPATCH && message.evt === RPCEvents.READY) {
      if (message.data.user) {
        this.user = message.data.user;
      }
      this.emit('connected');
    } else if (this._expecting.has(message.nonce)) {
      const { resolve, reject } = this._expecting.get(message.nonce);
      if (message.evt === 'ERROR') {
        const e = new Error(message.data.message);
        e.code = message.data.code;
        e.data = message.data;
        reject(e);
      } else {
        resolve(message.data);
      }
      this._expecting.delete(message.nonce);
    } else {
      this.emit(message.evt, message.data);
    }
  }

  /**
   * Authorize
   * @param {Object} options options
   * @returns {Promise}
   * @private
   */
  async authorize({ scopes, clientSecret, rpcToken, redirectUri, prompt } = {}) {
    if (clientSecret && rpcToken === true) {
      const body = await this.fetch('POST', '/oauth2/token/rpc', {
        data: new URLSearchParams({
          client_id: this.clientId,
          client_secret: clientSecret,
        }),
      });
      rpcToken = body.rpc_token;
    }

    const { code } = await this.request('AUTHORIZE', {
      scopes,
      client_id: this.clientId,
      prompt,
      rpc_token: rpcToken,
    });

    const response = await this.fetch('POST', '/oauth2/token', {
      data: new URLSearchParams({
        client_id: this.clientId,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    return response.access_token;
  }

  /**
   * Authenticate
   * @param {string} accessToken access token
   * @returns {Promise}
   * @private
   */
  authenticate(accessToken) {
    return this.request('AUTHENTICATE', { access_token: accessToken })
      .then(({ application, user }) => {
        this.accessToken = accessToken;
        this.application = application;
        this.user = user;
        this.emit('ready');
        return this;
      });
  }


  /**
   * Fetch a guild
   * @param {Snowflake} id Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Guild>}
   */
  getGuild(id, timeout) {
    return this.request(RPCCommands.GET_GUILD, { guild_id: id, timeout });
  }

  /**
   * Fetch all guilds
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Guild>>}
   */
  getGuilds(timeout) {
    return this.request(RPCCommands.GET_GUILDS, { timeout });
  }

  /**
   * Get a channel
   * @param {Snowflake} id Channel ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Channel>}
   */
  getChannel(id, timeout) {
    return this.request(RPCCommands.GET_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get all channels
   * @param {Snowflake} [id] Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Channel>>}
   */
  async getChannels(id, timeout) {
    const { channels } = await this.request(RPCCommands.GET_CHANNELS, {
      timeout,
      guild_id: id,
    });
    return channels;
  }

  /**
   * @typedef {CertifiedDevice}
   * @prop {string} type One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
   * @prop {string} uuid This device's Windows UUID
   * @prop {object} vendor Vendor information
   * @prop {string} vendor.name Vendor's name
   * @prop {string} vendor.url Vendor's url
   * @prop {object} model Model information
   * @prop {string} model.name Model's name
   * @prop {string} model.url Model's url
   * @prop {string[]} related Array of related product's Windows UUIDs
   * @prop {boolean} echoCancellation If the device has echo cancellation
   * @prop {boolean} noiseSuppression If the device has noise suppression
   * @prop {boolean} automaticGainControl If the device has automatic gain control
   * @prop {boolean} hardwareMute If the device has a hardware mute
   */

  /**
   * Tell discord which devices are certified
   * @param {CertifiedDevice[]} devices Certified devices to send to discord
   * @returns {Promise}
   */
  setCertifiedDevices(devices) {
    return this.request(RPCCommands.SET_CERTIFIED_DEVICES, {
      devices: devices.map((d) => ({
        type: d.type,
        id: d.uuid,
        vendor: d.vendor,
        model: d.model,
        related: d.related,
        echo_cancellation: d.echoCancellation,
        noise_suppression: d.noiseSuppression,
        automatic_gain_control: d.automaticGainControl,
        hardware_mute: d.hardwareMute,
      })),
    });
  }

  /**
   * @typedef {UserVoiceSettings}
   * @prop {Snowflake} id ID of the user these settings apply to
   * @prop {?Object} [pan] Pan settings, an object with `left` and `right` set between
   * 0.0 and 1.0, inclusive
   * @prop {?number} [volume=100] The volume
   * @prop {bool} [mute] If the user is muted
   */

  /**
   * Set the voice settings for a user, by id
   * @param {Snowflake} id ID of the user to set
   * @param {UserVoiceSettings} settings Settings
   * @returns {Promise}
   */
  setUserVoiceSettings(id, settings) {
    return this.request(RPCCommands.SET_USER_VOICE_SETTINGS, {
      user_id: id,
      pan: settings.pan,
      mute: settings.mute,
      volume: settings.volume,
    });
  }

  /**
   * Move the user to a voice channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * @param {boolean} [options.force] Force this move. This should only be done if you
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectVoiceChannel(id, { timeout, force = false } = {}) {
    return this.request(RPCCommands.SELECT_VOICE_CHANNEL, { channel_id: id, timeout, force });
  }

  /**
   * Move the user to a text channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectTextChannel(id, { timeout } = {}) {
    return this.request(RPCCommands.SELECT_TEXT_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get current voice settings
   * @returns {Promise}
   */
  getVoiceSettings() {
    return this.request(RPCCommands.GET_VOICE_SETTINGS)
      .then((s) => ({
        automaticGainControl: s.automatic_gain_control,
        echoCancellation: s.echo_cancellation,
        noiseSuppression: s.noise_suppression,
        qos: s.qos,
        silenceWarning: s.silence_warning,
        deaf: s.deaf,
        mute: s.mute,
        input: {
          availableDevices: s.input.available_devices,
          device: s.input.device_id,
          volume: s.input.volume,
        },
        output: {
          availableDevices: s.output.available_devices,
          device: s.output.device_id,
          volume: s.output.volume,
        },
        mode: {
          type: s.mode.type,
          autoThreshold: s.mode.auto_threshold,
          threshold: s.mode.threshold,
          shortcut: s.mode.shortcut,
          delay: s.mode.delay,
        },
      }));
  }

  /**
   * Set current voice settings, overriding the current settings until this session disconnects.
   * This also locks the settings for any other rpc sessions which may be connected.
   * @param {Object} args Settings
   * @returns {Promise}
   */
  setVoiceSettings(args) {
    return this.request(RPCCommands.SET_VOICE_SETTINGS, {
      automatic_gain_control: args.automaticGainControl,
      echo_cancellation: args.echoCancellation,
      noise_suppression: args.noiseSuppression,
      qos: args.qos,
      silence_warning: args.silenceWarning,
      deaf: args.deaf,
      mute: args.mute,
      input: args.input ? {
        device_id: args.input.device,
        volume: args.input.volume,
      } : undefined,
      output: args.output ? {
        device_id: args.output.device,
        volume: args.output.volume,
      } : undefined,
      mode: args.mode ? {
        type: args.mode.type,
        auto_threshold: args.mode.autoThreshold,
        threshold: args.mode.threshold,
        shortcut: args.mode.shortcut,
        delay: args.mode.delay,
      } : undefined,
    });
  }

  /**
   * Capture a shortcut using the client
   * The callback takes (key, stop) where `stop` is a function that will stop capturing.
   * This `stop` function must be called before disconnecting or else the user will have
   * to restart their client.
   * @param {Function} callback Callback handling keys
   * @returns {Promise<Function>}
   */
  captureShortcut(callback) {
    const subid = subKey(RPCEvents.CAPTURE_SHORTCUT_CHANGE);
    const stop = () => {
      this._subscriptions.delete(subid);
      return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'STOP' });
    };
    this._subscriptions.set(subid, ({ shortcut }) => {
      callback(shortcut, stop);
    });
    return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'START' })
      .then(() => stop);
  }

  /**
   * Sets the presence for the logged in user.
   * @param {object} args The rich presence to pass.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  setActivity(args = {}, pid = getPid()) {
    let timestamps;
    let assets;
    let party;
    let secrets;
    if (args.startTimestamp || args.endTimestamp) {
      timestamps = {
        start: args.startTimestamp,
        end: args.endTimestamp,
      };
      if (timestamps.start instanceof Date) {
        timestamps.start = Math.round(timestamps.start.getTime());
      }
      if (timestamps.end instanceof Date) {
        timestamps.end = Math.round(timestamps.end.getTime());
      }
      if (timestamps.start > 2147483647000) {
        throw new RangeError('timestamps.start must fit into a unix timestamp');
      }
      if (timestamps.end > 2147483647000) {
        throw new RangeError('timestamps.end must fit into a unix timestamp');
      }
    }
    if (
      args.largeImageKey || args.largeImageText
      || args.smallImageKey || args.smallImageText
    ) {
      assets = {
        large_image: args.largeImageKey,
        large_text: args.largeImageText,
        small_image: args.smallImageKey,
        small_text: args.smallImageText,
      };
    }
    if (args.partySize || args.partyId || args.partyMax) {
      party = { id: args.partyId };
      if (args.partySize || args.partyMax) {
        party.size = [args.partySize, args.partyMax];
      }
    }
    if (args.matchSecret || args.joinSecret || args.spectateSecret) {
      secrets = {
        match: args.matchSecret,
        join: args.joinSecret,
        spectate: args.spectateSecret,
      };
    }

    return this.request(RPCCommands.SET_ACTIVITY, {
      pid,
      activity: {
        state: args.state,
        details: args.details,
        timestamps,
        assets,
        party,
        secrets,
        buttons: args.buttons,
        instance: !!args.instance,
      },
    });
  }

  /**
   * Clears the currently set presence, if any. This will hide the "Playing X" message
   * displayed below the user's name.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  clearActivity(pid = getPid()) {
    return this.request(RPCCommands.SET_ACTIVITY, {
      pid,
    });
  }

  /**
   * Invite a user to join the game the RPC user is currently playing
   * @param {User} user The user to invite
   * @returns {Promise}
   */
  sendJoinInvite(user) {
    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_INVITE, {
      user_id: user.id || user,
    });
  }

  /**
   * Request to join the game the user is playing
   * @param {User} user The user whose game you want to request to join
   * @returns {Promise}
   */
  sendJoinRequest(user) {
    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  /**
   * Reject a join request from a user
   * @param {User} user The user whose request you wish to reject
   * @returns {Promise}
   */
  closeJoinRequest(user) {
    return this.request(RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  createLobby(type, capacity, metadata) {
    return this.request(RPCCommands.CREATE_LOBBY, {
      type,
      capacity,
      metadata,
    });
  }

  updateLobby(lobby, { type, owner, capacity, metadata } = {}) {
    return this.request(RPCCommands.UPDATE_LOBBY, {
      id: lobby.id || lobby,
      type,
      owner_id: (owner && owner.id) || owner,
      capacity,
      metadata,
    });
  }

  deleteLobby(lobby) {
    return this.request(RPCCommands.DELETE_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  connectToLobby(id, secret) {
    return this.request(RPCCommands.CONNECT_TO_LOBBY, {
      id,
      secret,
    });
  }

  sendToLobby(lobby, data) {
    return this.request(RPCCommands.SEND_TO_LOBBY, {
      id: lobby.id || lobby,
      data,
    });
  }

  disconnectFromLobby(lobby) {
    return this.request(RPCCommands.DISCONNECT_FROM_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  updateLobbyMember(lobby, user, metadata) {
    return this.request(RPCCommands.UPDATE_LOBBY_MEMBER, {
      lobby_id: lobby.id || lobby,
      user_id: user.id || user,
      metadata,
    });
  }

  getRelationships() {
    const types = Object.keys(RelationshipTypes);
    return this.request(RPCCommands.GET_RELATIONSHIPS)
      .then((o) => o.relationships.map((r) => ({
        ...r,
        type: types[r.type],
      })));
  }

  /**
   * Subscribe to an event
   * @param {string} event Name of event e.g. `MESSAGE_CREATE`
   * @param {Object} [args] Args for event e.g. `{ channel_id: '1234' }`
   * @returns {Promise<Object>}
   */
  async subscribe(event, args) {
    await this.request(RPCCommands.SUBSCRIBE, args, event);
    return {
      unsubscribe: () => this.request(RPCCommands.UNSUBSCRIBE, args, event),
    };
  }

  /**
   * Destroy the client
   */
  async destroy() {
    await this.transport.close();
  }
}
ct.discord = {
    Client: RPCClient,
    register(id) {
        return util.register("discord-"+id);
    }
};
