import { CommandMessage, CommandNotFound, Discord } from "@typeit/discord";
import { join } from "path";
import { config } from './Main';
const prefix = config.prefix[0];
@Discord(prefix, {
  import: [join(__dirname, "commands", "*.js")],
})
export class BotCommands {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @CommandNotFound()
  notFound(command: CommandMessage) {
    command.reply(`Command not found, try: \`${prefix}help\``);
  }
}