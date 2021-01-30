import { MotherShipCharacter } from "./MotherShip/MotherShipCharacterClass";
import { green, orange, blue, red } from "color-name";
import { User } from "discord.js";
import { MotherShipSkillType } from './Types';

/**
 * Generates embed message
 * @param {motherShipCharacter} Mothership character to embed
 * @param {user} User to make character author
 */

export function motherShipCharacterEmbedGen(motherShipCharacter: MotherShipCharacter, user: User):unknown {
  // TODO Make a type for this
  const marineCombatBonus = () => {
    switch (motherShipCharacter.motherShipClass.name) {
      case "Marine":
        return "\n+5 Combat bonus whenever a near fellow Marine is nearby";
      default:
        return "";
    }
  };
  const classColor = () => {
    switch (motherShipCharacter.motherShipClass.name) {
      case "Teamster":
        return orange;
      case "Scientist":
        return blue;
      case "Android":
        return red;
      case "Marine":
        return green;
      default:
        return green;
    }
  };

  const embed = {
    color: classColor(),
    title: `${motherShipCharacter.motherShipClass.name} | ${motherShipCharacter.firstName} ${motherShipCharacter.lastName}`,
    author: {
      name: `${user.username}`,
      icon_url: `${user.avatarURL()}`,
    },
    description: `**Starting Loadout**
${motherShipCharacter.gear}`,
    fields: [
      {
        name: "Stats",
        value: `Str: ${motherShipCharacter.strength} | Spe: ${motherShipCharacter.speed} | Int: ${
          motherShipCharacter.intelligence
        } | Com: ${motherShipCharacter.combat}${marineCombatBonus()}`,
        inline: true,
      },
      {
        name: "Fortitudes",
        value: `Sanity: ${motherShipCharacter.sanity} | Fear: ${motherShipCharacter.fear} | Body: ${motherShipCharacter.body} | Armor: ${motherShipCharacter.armor}`,
        inline: true,
      },
      {
        name: "Health",
        value: `${motherShipCharacter.health}`,
        inline: true,
      },
      {
        name: "Stress",
        value: `${motherShipCharacter.stress}`,
        inline: true,
      },
      {
        name: "Resolve",
        value: `${motherShipCharacter.resolve}`,
        inline: true,
      },
      {
        name: `Credits`,
        value: `${motherShipCharacter.credits}`,
        inline: true,
      },
      // Legacy code from using set skills with names
      /* { // Skill Profile
        name: `Skill Set | ${mschar.skillProfile.name}`,
        value: `${mschar.skillProfile.value}`,
      }, */
      {
        name: "Skills",
        value: motherShipSkillTextBlock(motherShipCharacter.skills),
      },
      {
        name: "XP",
        value: `${motherShipCharacter.experienceGain}`,
      },
      {
        name: `Fear Save`,
        value: `${motherShipCharacter.dealing}`,
      },
      {
        name: "Nightmare",
        value: `${motherShipCharacter.nightmare}`,
      },
      {
        name: `Patch`,
        value: `${motherShipCharacter.patch}`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: `MoThErShIp`,
    },
  };
  return embed;
}

function motherShipSkillTextBlock(input: MotherShipSkillType[]) {
  let returnString = "";
  // tslint:disable-next-line: prefer-for-of
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    returnString =
      returnString +
      `**${element.name}** | ${element.type.name} \`${element.type.bonus}%\` | ${element.description}
`;
  }
  return returnString;
}
