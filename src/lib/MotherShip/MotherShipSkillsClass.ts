import { SKILLS_LIST, TRAINED_SKILLS } from "./lists/Skills";
import { MotherShipClassType, MotherShipSkillType } from "../Types";
import { randomNumberGenerator } from "../RandomNumberGenerator";
import { logger } from "../Logger";
import { debug } from "console";

export class Skills {
  // tslint:disable-next-line: variable-name
  private _list: MotherShipSkillType[];
  public get list(): MotherShipSkillType[] {
    return this._list;
  }
  public set list(value: MotherShipSkillType[]) {
    this._list = value;
  }
  // tslint:disable-next-line: variable-name
  private _points: number;
  public get points(): number {
    return this._points;
  }
  public set points(value: number) {
    this._points = value;
  }

  constructor(initialSkills: string[], initialPoints: number) {
    this._list = checkSkillList(initialSkills);
    this._points = initialPoints;
  }

  generate():null {
    return null;
  }
}

/**
 * Generates skillList type list from string list input.
 * @param inputList String list to check
 */
export function checkSkillList(inputList: string[]):MotherShipSkillType[] {
  // tslint:disable-next-line: prefer-const
  const returnSkillList: MotherShipSkillType[] = [];
  /**
   * Loop through every inputList.
   */
  // tslint:disable-next-line: prefer-for-of
  for (let inputIndex = 0; inputIndex < inputList.length; inputIndex++) {
    const inputElement = inputList[inputIndex];
    /**
     * Loop through skill list and compare current value from string list
     */
    // tslint:disable-next-line: prefer-for-of
    for (
      let skillListIndex = 0;
      skillListIndex < SKILLS_LIST.length;
      skillListIndex++
    ) {
      const skillListElement = SKILLS_LIST[skillListIndex];
      if (inputElement === skillListElement.name) {
        returnSkillList.push(skillListElement);
        break;
      }
    }
  }
  return returnSkillList;
}

/**
 * Get string list of skills that can be selected from.
 * @param skillsList skillList type to sort through.
 */
export function additionalSelectableSkills(skillsList: MotherShipSkillType[]):string[] {
  // eslint-disable-next-line prefer-const
  let returns: string[] = [];
  // tslint:disable-next-line: prefer-for-of
  for (let index = 0; index < skillsList.length; index++) {
    skillsList[index].prerequisiteFor.forEach((element) => {
      returns.push(element);
    });
  }
  logger({message: `Generated skills unlock: ${returns}`, type:'debug'});
  return returns;
}

export function selectNewSkill():null {
  return null;
}
/**
 * Uses input to generate a starting set of skills.
 * @param input
 */
export function randomStartingSkills(input: MotherShipClassType):MotherShipSkillType[] {
logger({message: `Using:`, json:input, type:'debug'});
  let initialList: string[] = [];
  switch (input.starting.skills.guaranteed) {
    case undefined:
      // eslint-disable-next-line no-self-assign
      initialList = initialList;
      break;
    default:
      initialList = initialList.concat(input.starting.skills.guaranteed);
      break;
  }

  switch (input.starting.skills.pick.choose) {
    case undefined:
      // eslint-disable-next-line no-self-assign
      initialList = initialList;
      break;
    default:
      for (let index = 0; index < input.starting.skills.pick.choose;) {
        const element =
          input.starting.skills.pick.list[
            randomNumberGenerator(input.starting.skills.pick.list.length)
          ];
        if (initialList.indexOf(element) !== -1) {
          logger({message: `Choose an already selected item: ${element}`, type:'debug'});
        } else {
          initialList = initialList.concat(element);
          index++;
        }
      }
      break;
  }

  let initialSkills: MotherShipSkillType[] = checkSkillList(initialList);
   logger({message: `Skills:`, json:initialSkills, type:'debug'});
  let skillPoints = input.starting.skillPoints;
  while (skillPoints > 0) {
    logger({message: `Skill Points: ${skillPoints}`, type:'debug'});
    const additionalSkills: MotherShipSkillType[] = checkSkillList(
      additionalSelectableSkills(initialSkills)
    );
    const selectableSkills: MotherShipSkillType[] = TRAINED_SKILLS.concat(
      additionalSkills
    );
    const selectedSkill: MotherShipSkillType =
      selectableSkills[randomNumberGenerator(selectableSkills.length)];
    logger({message:"Selected",json:selectedSkill, type:'debug'});
    if (
      initialSkills.indexOf(selectedSkill) !== -1 ||
      selectedSkill.type.cost > skillPoints
    ) {
      logger({message:
        `Chosen skill already selected or too expensive skillPoints[${skillPoints}]: ${selectedSkill.name} ${selectedSkill.type.name}:${selectedSkill.type.cost}`
      , type:'error'});
    } else {
      logger({message:`Chosen Skill: ${selectedSkill.name}`});
      initialSkills = initialSkills.concat(selectedSkill);
      skillPoints = skillPoints - selectedSkill.type.cost;
    }
    // debug(`Skill points left to sped: ${skillPoints}`)
  }
  debug(initialSkills, 'json');
  return initialSkills;
}
