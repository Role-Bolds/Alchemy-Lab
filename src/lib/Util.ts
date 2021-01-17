
import path = require("path");
import { logger } from "./Logger";
import { Client} from "@typeit/discord";
import { config } from "../Main";


/**
 * Wrapper function to extract filename.ext
 * @param fullPath `${fileName(__filename)}`
 */
export function fileName(fullPath: string):string {
  return path.basename(fullPath);
}

/**
 * Print commands to logger
 */
export function commandsList():void {
  const commandsStore = Client.getCommands();
  logger({
    message: "Command List",
    json: commandsStore,
    source: `${fileName(__filename)}`,
  });
}

/**
 * Make a bot token safe to print on screen or on a log
 * @param botToken
 */
export function tokenSanitize(botToken: string):string {
  const sanitize = botToken.split('.')
  return `${sanitize[0].replace(/([^\\.!\\*\\/\\])/gi,"*")}.${sanitize[1]}.${sanitize[2].replace(/([^\\.!\\*\\/\\])/gi,"*")}`
}

export function prefixHandler():string {
  return config.prefix[0];
}
