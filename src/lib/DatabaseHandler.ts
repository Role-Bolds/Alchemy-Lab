import { Client } from 'pg';

export class Database {
  client: Client;
  constructor(dataBase: string){
    // Settings are set from environmental variables
    this.client = new Client({
      database: dataBase
    });
  }
}