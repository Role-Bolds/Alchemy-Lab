import { Config } from './lib/Config';
import { logger } from './lib/Logger';
import { Client } from '@typeit/discord';
import { tokenSanitize, fileName } from './lib/Util';

const NODE_ENV = process.env.NODE_ENV

export const config = new Config();
const clientPerams = new Client({
	classes: [
		`${__dirname}/classes/BotCommands.js`,
		`${__dirname}/classes/BotEvents.js`
	],
	variablesChar: ':'
});

export class Main{
	public static client: Client = clientPerams;
	static starboardsManager: unknown;

	static startBot():void {
		logger({ message: 'Starting bot', source:fileName(__filename) });
		logger({message: `Loading commands and events:`, source:fileName(__filename)});
		logger({ message: 'Logging in:', source:fileName(__filename)});
		this.client.login(`${config.token}`);
	}

	static initializeBot():void {
		logger({ message: 'Initalizing', source:fileName(__filename) });
		logger({message: `Current token:\n${tokenSanitize(config.token)}`, source:fileName(__filename)});
	}

}

// Check if we're running a coverage test
if (NODE_ENV !== "coverage") {
	Main.initializeBot();
	Main.startBot();
}