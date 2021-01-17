import { Command, Infos, CommandMessage } from '@typeit/discord';
import { logger } from '../lib/Logger';
import { fileName } from '../lib/Util';
import { MotherShipCharacter } from '../lib/MotherShip/MotherShipCharacterClass';
import { characterEmbedGen } from '../lib/embedGenerators';


export class MotherShip {
  @Command("msgen")
  @Infos({description:"generate a mothership character"})
  async ms(message: CommandMessage):Promise<void> {
    try {
      const motherShipCharacterGen = new MotherShipCharacter();
      const motherShipCharacterEmbed = characterEmbedGen(motherShipCharacterGen, message.author);
      // TODO REGEX for replacing message with line breaker of `-` when generating json
      logger({message:'Mothership Character Generated',json:motherShipCharacterGen,type:'debug',source:fileName(__filename)})
      await message.channel.send({ embed: motherShipCharacterEmbed });
    } catch (error) {
      logger({message: error, type:'error', source:fileName(__filename)})
    }
  }
}