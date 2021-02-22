import { Command, Infos, CommandMessage } from '@typeit/discord';
import { logger } from '../lib/Logger';
import { fileName } from '../lib/Util';

export class Star{
  @Command('createStarBoard')
  @Infos({description:"set channel for starboard"})
  async createBoard(message: CommandMessage):Promise<void> {
    try {
      logger({message:`new starboard channel| guild:${message.guild} channel:${message.channel}`,source:fileName(__filename)});
    } catch (error) {
      logger({message:error, type:'error', source:fileName(__filename)});
    }
  }
}

