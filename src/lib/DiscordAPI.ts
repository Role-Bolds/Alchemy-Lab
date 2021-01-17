import { config } from "../Main";
import { request } from "https";

/**
 * Direct interaction with
 */
export class DiscordAPI {
  private defaultApiUrl = `https://discord.com/api/v${config.apiVersion}/applications/${config.appID}/`;
  constructor() {
    this._apiURL = this.defaultApiUrl;
  }
  /**
   * commands
   */
  public commands() {
    const commandJson = {
      name: "ns",
      description: "Nation States",
    };
    const auth = {
      Authorization: config.appID,
    };
  }
  // tslint:disable-next-line: variable-name
  private _apiURL: string;
  public get apiURL(): string {
    return this._apiURL;
  }
  public set apiURL(value: string) {
    this._apiURL = value;
  }
}
