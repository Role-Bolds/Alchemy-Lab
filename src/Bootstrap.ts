import { BotMain } from './BotMain';
import { Database } from './lib/DatabaseHandler';
import { Config } from './lib/Config';
import { Client } from '@typeit/discord';
import { logger } from './lib/Logger';
import { fileName } from './lib/Util';

const client = new Client({
	classes: [
		`${__dirname}/classes/BotCommands.js`,
		`${__dirname}/classes/BotEvents.js`
	],
	variablesChar: ':'
});

export const config = new Config();
export const botClient = new BotMain({clientPerams:client});

// Check if we're running a coverage test
if (process.env.NODE_ENV !== "coverage") {
	const dataBase = new Database('Testing');

	try {
		logger({message: 'Logging into database', type:'info', source:fileName(__filename)});
		dataBase.client.connect()
	} catch(error) {
		logger({message:error, type:'error', source:fileName(__filename)});
	}

	botClient.initializeBot();
	botClient.startBot();
}