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

export const bot = new Database({botPerams:client});

// Check if we're running a coverage test
if (process.env.NODE_ENV !== "coverage") {
	try {
		logger({message: 'Logging into database', type:'info', source:`${fileName(__filename)}>Data Base`});
		bot.clientDB.connect(error => {
			if (error) {
				logger({message:`Error logging in:\n${error}`, type:'error',source:`${fileName(__filename)}>Data Base`});
			} else {
				logger({message: 'Successful - closing connection', type:'info', source:`${fileName(__filename)}>Data Base`});
				bot.clientDB.end();
			}
		});
	} catch(error) {
		logger({message:error, type:'error', source:`${fileName(__filename)}>Data Base`});
	}
	try {
		bot.initializeBot();
		bot.startBot();
	} catch (error) {
		logger({message:error, type:'error', source:`${fileName(__filename)}>Bot Client`});
	}
}