declare namespace ct {
  /**
   * Discord Rich Presence/Game Activity integration for ct.js games
   */
  namespace discord {
    /**
     * @typedef {RPCClientOptions}
     * @extends {ClientOptions}
     * @prop {string} transport RPC transport. one of `ipc` or `websocket`
     */

    /**
     * The main hub for interacting with Discord RPC
     * @extends {BaseClient}
     */
    class Client {
      /**
       * @param {RPCClientOptions} [options] Options for the client.
       * You must provide a transport
       */
      constructor(options?: {});
    }
    function register(id: string): void;
  }
}
