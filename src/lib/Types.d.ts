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

export type MotherShipSkillType = {
  name: string;
  description: string;
  type: {
    name: string,
    cost: number,
    bonus: number
  }
  prerequisiteFor?: string[];
};

export type MotherShipClassType = {
  name: string;
  starting: {
    sanity: number,
    fear: number;
    body: number;
    armor: number;
    intelligence: number;
    strength: number;
    speed: number;
    combat: number;
    skills: {
      guaranteed: string[];
      pick: {
        list: string[];
        choose: number;
      };
    };
    skillPoints: number;
  };
  experienceGain: string;
  dealing: string;
};