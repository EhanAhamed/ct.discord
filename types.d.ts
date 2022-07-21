declare namespace ct {
  namespace discord {
    /**
     * The main hub for interacting with Discord RPC
     * @extends {BaseClient}
     */
    class Client {
      /**
       * @param {RPCClientOptions} [options] Options for the client.
       * You must provide a transport
       */
      constructor(options: object) {}
    }
    function register(id: string): void;
  }
}
