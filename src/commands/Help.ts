/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { config } from "../Main";
import { Client, Command, CommandInfos, CommandMessage, Infos, RuleBuilder } from "@typeit/discord";

export class Help {
  @Command("help")
  @Infos({description: "Help command"})
  async help(message: CommandMessage) {
    const respond = `I can only do the following:\n${commandsMessage()}\n\nV:${config.version}`;
    await message.reply({  content: respond  });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const commandsOutput = (commandsObject: CommandInfos<any, RuleBuilder>[]):string => {
  let helpMessage = ``;
  let i = 0;
  while (commandsObject.length>i) {
    helpMessage = `${helpMessage}\`${commandsObject[i].commandName}\` | ${commandsObject[i].infos.description}\n`;
    i++;
  }
  return helpMessage;
};

const commandsMessage = (): string => {
  const commands = Client.getCommands();
  const output = `Prefix: \`${
    config.prefix[0]
  }\`\n${commandsOutput(commands)}`;
  return output;
}
