import { logger } from '../lib/Logger';

export class StarboardManager {
  public makeTable(dataBaseName:string):void{
    logger({message:`Making database: ${dataBaseName}`, type:'debug'});
  }

  public readTable(tableName:string):void{
    logger({message: `Reading table: ${tableName}`, type:'debug'});
  }
}