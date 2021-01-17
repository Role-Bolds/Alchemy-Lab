import { MOTHERSHIP_CLASSES } from "./lists/Classes";
import {
  FIRST_NAMES,
  LAST_NAMES,
  ANDROID_NAMES,
  ANDROID_VERSION,
} from "./lists/Names";
import {
  randomNumberGenerator,
  batchRandomNumberGenerator, reducer
} from "../RandomNumberGenerator";
import { LOADOUTS_LIST } from "./lists/Loadouts";
import { NIGHTMARES } from "./lists/Nightmares";
import { PATCHES } from "./lists/Patches";
import { MotherShipClassType, MotherShipSkillType } from "../Types";
import { randomStartingSkills } from "./MotherShipSkillsClass";

export class MotherShipCharacter {
  motherShipClass: MotherShipClassType;
  firstName: string;
  lastName: string;
  intelligence: number;
  strength: number;
  speed: number;
  combat: number;
  sanity: number;
  fear: number;
  body: number;
  armor: number;
  gear: string;
  health: number;
  stress: number;
  resolve: number;
  skills: MotherShipSkillType[];
  skillProfile: { name: string; value: string };
  dealing: string;
  experienceGain: string;
  nightmare: string;
  patch: string;
  credits: number;

  constructor(classSelector?:string) {
    const generateItems = false;
    switch (classSelector) {
      case 'teamster':
        this.motherShipClass = MOTHERSHIP_CLASSES[0];
        break;
      case 'android':
        this.motherShipClass = MOTHERSHIP_CLASSES[1];
        break;
      case 'scientist':
        this.motherShipClass = MOTHERSHIP_CLASSES[2];
        break;
      case 'marine':
        this.motherShipClass = MOTHERSHIP_CLASSES[3];
        break;
      default:
        this.motherShipClass = MOTHERSHIP_CLASSES[randomNumberGenerator(MOTHERSHIP_CLASSES.length)];
        break;
      }
    // set name based on if Android
    switch (this.motherShipClass.name) {
      case "Android":
        this.firstName =
          ANDROID_NAMES[randomNumberGenerator(ANDROID_NAMES.length)];
        this.lastName =
          ANDROID_VERSION[randomNumberGenerator(ANDROID_VERSION.length)];
        break;
      default:
        this.firstName = FIRST_NAMES[randomNumberGenerator(FIRST_NAMES.length)];
        this.lastName = LAST_NAMES[randomNumberGenerator(FIRST_NAMES.length)];
        break;
    }
    // generate stats
    this.intelligence = batchRandomNumberGenerator(6, 10).reduce(reducer);
    this.strength = batchRandomNumberGenerator(6, 10).reduce(reducer);
    this.speed = batchRandomNumberGenerator(6, 10).reduce(reducer);
    this.combat = batchRandomNumberGenerator(6, 10).reduce(reducer);
    // set Class specific values
    this.intelligence =
      this.intelligence + this.motherShipClass.starting.intelligence;
    this.strength = this.strength + this.motherShipClass.starting.strength;
    this.speed = this.speed + this.motherShipClass.starting.speed;
    this.combat = this.combat + this.motherShipClass.starting.combat;
    this.sanity = this.motherShipClass.starting.sanity;
    this.fear = this.motherShipClass.starting.fear;
    this.body = this.motherShipClass.starting.body;
    this.armor = this.motherShipClass.starting.armor;
    this.skills = randomStartingSkills(this.motherShipClass);
    this.experienceGain = this.motherShipClass.experienceGain;
    this.dealing = this.motherShipClass.dealing;
    //
    this.gear = LOADOUTS_LIST[randomNumberGenerator(LOADOUTS_LIST.length)];
    this.nightmare = NIGHTMARES[randomNumberGenerator(NIGHTMARES.length)];
    this.patch = PATCHES[randomNumberGenerator(PATCHES.length)];
    this.credits = this._generateItems(generateItems);
    this.health = this.strength * 2;
    this.stress = 2;
    this.resolve = 0;
  }

  _generateItems(generateItems:boolean):number {
    if(generateItems){return batchRandomNumberGenerator(5, 10).reduce(reducer) * 10}
    else{return batchRandomNumberGenerator(5,10).reduce(reducer)}
  }
}
