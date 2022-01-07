import { getRandomIntInclusive } from "../helper/helpers";
import data from "./../data.json";
import { Action, State } from "./model/types";

export let initialState = () => {
  return {
    accessorie:
      data.accessorie[getRandomIntInclusive(1, data.accessorie.length - 1)],
    neck: data.neck[getRandomIntInclusive(1, data.neck.length - 1)],
    ears: data.ears[getRandomIntInclusive(1, data.ears.length - 1)],
    eyes: data.eyes[getRandomIntInclusive(1, data.eyes.length - 1)],
    hair: data.hair[getRandomIntInclusive(1, data.hair.length - 1)],
    backgrounds:
      data.backgrounds[getRandomIntInclusive(1, data.backgrounds.length - 1)],

    leg: data.leg[getRandomIntInclusive(1, data.leg.length - 1)],
    mouth: data.mouth[getRandomIntInclusive(1, data.mouth.length - 1)],
  };
};

export const reducer = (state: State, action: Action) => {
  let res = initialState();

  switch (action.type) {
    case "accessorie":
      return {
        ...state,
        accessorie: action.payload,
      };

    case "neck":
      return {
        ...state,
        neck: action.payload,
      };

    case "hair":
      return {
        ...state,
        hair: action.payload,
      };
    case "eyes":
      return {
        ...state,
        eyes: action.payload,
      };
    case "leg":
      return {
        ...state,
        leg: action.payload,
      };
    case "backgrounds":
      return {
        ...state,
        backgrounds: action.payload,
      };
    case "ears":
      return {
        ...state,
        ears: action.payload,
      };
    case "mouth":
      return {
        ...state,
        mouth: action.payload,
      };
    case "random":
      return {
        ...state,
        ...res,
      };

    default:
      throw new Error();
  }
};
