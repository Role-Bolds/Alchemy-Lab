import { logger } from './lib/Logger';
import { Client } from '@typeit/discord';
import { tokenSanitize, fileName, commandsList } from './lib/Util';
import { config } from './Bootstrap';
import { exit } from 'process';



export class BotMain{
	public client: Client

	constructor({clientPerams}){
		this.client = clientPerams;
	}

	public async startBot():Promise<void> {
		logger({ message: 'Starting bot', source:fileName(__filename) });
		logger({ message: 'Logging in', source:fileName(__filename)});
		try {
			await this.client.login(`${config.token}`);
			if(Client.getCommands() === []){throw new Error("No commands found");
			}
		} catch (error) {
			logger({message: error, type:'error', source:fileName(__filename)})
			exit(2);
		}
	}

	public initializeBot():void {
		logger({ message: 'Initalizing', source:fileName(__filename) });
		logger({message: `Current token:\n${tokenSanitize(config.token)}`, source:fileName(__filename)});
	}

}