import { Config } from './lib/Config';
import { logger } from './lib/Logger';
import { Client } from '@typeit/discord';
import { tokenSanitize } from './lib/Util';

const NODE_ENV = process.env.NODE_ENV

export const config = new Config();
const clientPerams = new Client({
	classes: [
		`${__dirname}/BotCommands.js`,
		`${__dirname}/BotEvents.js`
	],
	variablesChar: ':'
});

export class Main{
	static client: Client = clientPerams;

	static startBot():void {
		logger({ message: 'Starting bot', source: `Main` });
		logger({message: `Loading commands and events:`, source:`Main`});
		this.client.login(`${config.token}`);
	}

	static initializeBot():void {
		logger({ message: 'Initalizing', source: `Main` });
		logger({message: `Current token:\n${tokenSanitize(config.token)}`, source:'Main'});
	}
}
// Check if we're running a coverage test
if (NODE_ENV !== "coverage") {
	Main.initializeBot();
	Main.startBot();
}