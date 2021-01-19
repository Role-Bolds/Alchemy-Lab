import { Command, Infos, CommandMessage } from '@typeit/discord';
import { logger } from '../lib/Logger';
import { fileName } from '../lib/Util';
import { Main } from '../Main';

export class Star{
  @Command('createStarBoard')
  @Infos({description:"set channel for starboard"})
  async createBoard(message: CommandMessage):Promise<void> {
    try {
      Main.starboardsManager.create(message.channel, selfStar: false, threshold: 0, color: '#6B7AC9');
      logger({message:'new starboard channel',source:fileName(__filename)});
    } catch (error) {
      logger({message:error, type:'error', source:fileName(__filename)});
    }
  }
}

