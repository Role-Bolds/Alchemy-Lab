import { Command, Infos, CommandMessage } from '@typeit/discord';


export class Ping {
  @Command("ping")
  @Infos({description:"Pongs you"})
  async ping(message: CommandMessage):Promise<void> {
    await message.channel.send('pong')
  }
}