export type loggingOptions = {
  message: string;
  type?: "debug" | "error" | "info";
  // eslint-disable-next-line @typescript-eslint/ban-types
  json?: object;
  source?: string;
};

export type configSettings = {
  DISCORD_BOT_API: number;
  DISCORD_BOT_APP_ID: number;
  DISCORD_BOT_DEBUG: boolean;
  DISCORD_BOT_LOG_NAME: string;
  DISCORD_BOT_PREFIX: string;
  DISCORD_BOT_USER_TOKEN: string;
};

export type envType = {
  DISCORD_API: number,
  DISCORD_APP_ID: number,
  DISCORD_BOT_DEBUG: boolean,
  DISCORD_BOT_LOG_NAME: string,
  DISCORD_BOT_PREFIX: string,
  DISCORD_BOT_USER_TOKEN: string,
}