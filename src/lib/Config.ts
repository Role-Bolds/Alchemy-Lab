/* eslint-disable @typescript-eslint/no-var-requires */
import * as env from 'env-var';
/**
 * Do not convert to import, build then copies it and places under build folder with src subfolder.
 */
// tslint:disable-next-line: no-var-requires
const pkg = require("../../package.json");
export class Config {
  public apiVersion: number = env.get("DISCORD_API").default(8).asIntPositive();
  public appID: number = env
  .get("DISCORD_APP_ID")
  .default(1111111111111111)
  .asIntPositive();
  public debug: boolean = env.get("DISCORD_BOT_DEBUG").default("true").asBool();
  public logName: string = env
  .get("DISCORD_BOT_LOG_NAME")
  .default("tsbot")
  .asString();
  public node: string = process.version;
  public prefix: string[] = env.get("DISCORD_BOT_PREFIX").default("!?,!tsbot").asString().split(',');
  public token: string = env
  .get("DISCORD_BOT_USER_TOKEN")
  .default("KVcyIMkNOTgt2OTgzAjIDOTh.DEFVAL.WuBBa1U884DuBdu8M07hAfucC45")
  .asString();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public version: any = pkg.version;
}