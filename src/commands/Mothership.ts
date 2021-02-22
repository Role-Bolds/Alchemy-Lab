import { Command, Infos, CommandMessage } from '@typeit/discord';
import { logger } from '../lib/Logger';
import { fileName } from '../lib/Util';
import { MotherShipCharacter } from '../lib/MotherShip/MotherShipCharacterClass';
<<<<<<< HEAD
import { motherShipCharacterEmbedGen } from '../lib/embedGenerators';
=======
import { motherShipCharacterEmbedGen } from '../lib/EmbedGenerators';
>>>>>>> 08b45eb3508e7f80b6946106d55c06e3d435fa63


export class MotherShip {
  @Command("msgen :class")
  @Infos({description:"generate a mothership character"})
  async msgen(message: CommandMessage):Promise<void> {
    const classGen = message.args.class;
    try {
      const motherShipCharacterGen = () => {
        if( classGen !== undefined){return new MotherShipCharacter(classGen);} else {return new MotherShipCharacter()}
      };
      const motherShipGen = motherShipCharacterGen();
      const motherShipCharacterEmbed = motherShipCharacterEmbedGen(motherShipGen, message.author);
      logger({message:'Mothership Character Generated',json:motherShipGen,type:'debug',source:fileName(__filename)})
      await message.channel.send({ embed: motherShipCharacterEmbed });
    } catch (error) {
      logger({message: error, type:'error', source:fileName(__filename)})
    }
  }
}