import { CommandMessage, CommandNotFound, Discord } from "@typeit/discord";
import { join } from "path";
<<<<<<< HEAD:src/classes/BotCommands.ts
import { config } from '../Main';
=======
import { config } from "../Bootstrap";
>>>>>>> 08b45eb3508e7f80b6946106d55c06e3d435fa63:src/BotCommands.ts
const prefix = config.prefix[0];
@Discord(prefix, {
  import: [join(__dirname, "../commands", "*.js")],
})
export class BotCommands {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @CommandNotFound()
  notFound(command: CommandMessage) {
    command.reply(`Command not found, try: \`${prefix}help\``);
  }
}