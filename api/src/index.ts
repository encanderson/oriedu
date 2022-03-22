import { ServerSetup } from "./server";

import logger from "./logs";

import { config } from "./config";

(async (): Promise<void> => {
  try {
    const server = new ServerSetup(config);
    await server.init();

    server.start(4000);
  } catch (error) {
    logger.error(error);
  }
})();
