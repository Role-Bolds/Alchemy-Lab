import { Client } from 'pg';
import { BotMainInterface } from './Interfaces';
import { BotMain } from '../BotMain';

export class Database extends BotMain {
  clientDB: Client;
  constructor(dataBase: BotMainInterface){
    super(dataBase.botPerams);
    // Settings are set from environmental variables
    this.clientDB = new Client({
      database: dataBase.botDataBase,
      ssl: {
        rejectUnauthorized: false,
        cert: `${__dirname}/../../secrets/ssl.crt`
      }
    });
  }
}