import { Database } from './lib/DatabaseHandler';
import { Config } from './lib/Config';
import { Client } from '@typeit/discord';
import { logger } from './lib/Logger';
import { fileName } from './lib/Util';
import { exit } from 'process';

const client = new Client({
	classes: [
		`${__dirname}/classes/BotCommands.js`,
		`${__dirname}/classes/BotEvents.js`
	],
	variablesChar: ':'
});

export const config = new Config();

// Check if we're running a coverage test
if (process.env.NODE_ENV !== "coverage") {
	const bot = new Database({botDataBase:'defaultdb',botPerams:client});

	try {
		logger({message: 'Logging into database', type:'info', source:fileName(__filename)});
		bot.clientDB.connect(error => {
			if (error) {
				logger({message:`Error logging in:\n${error}`, type:'error',source:fileName(__filename)});
			} else {
				logger({message: 'Successful - closing connection', type:'info', source:fileName(__filename)});
				bot.clientDB.end();
			}
		});
	} catch(error) {
		logger({message:error, type:'error', source:fileName(__filename)});
		exit(2);
	}
	try {
		bot.initializeBot();
		bot.startBot();
	} catch (error) {
		logger({message:error, type:'error', source:fileName(__filename)});
		exit(2);
	}
}