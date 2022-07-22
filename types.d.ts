declare namespace ct {
  /**
   * Discord Rich Presence/Game Activity integration for ct.js games
   */
  namespace discord {
    /**
     * The main hub for interacting with Discord RPC
     */
    class Client {
      /**
       * @param {RPCClientOptions} [options] Options for the client.
       * You must provide a transport; one of `ipc` or `websocket`
       */
      constructor(options: { transport: "ipc" | "websocket" });
    }
    function register(id: string): void;
  }
}
