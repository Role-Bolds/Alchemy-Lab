import { logger } from '../lib/Logger';
import { config } from '../Main';
import { commandsList, fileName } from '../lib/Util';
import { On } from '@typeit/discord';



export class Ready {
  @On('ready')
	private logReady()
	{
    logger({ message: 'Client ready', source: `${fileName(__filename)}` });
    logger({
      message: `Code base: ${config.version}`,
      type: 'debug',
      source: `${fileName(__filename)}`,
    });
    logger({
      message: `Node V: ${config.node}`,
      source: `${fileName(__filename)}`,
    });
    logger({
      message: 'Error test',
      type: 'error',
      source: `${fileName(__filename)}`,
    });
    commandsList();
  }
}