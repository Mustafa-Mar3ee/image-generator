export interface State {
    accessorie: string;
    backgrounds: string;
    ears: string;
    eyes: string;
    hair: string;
    leg: string;
    mouth: string;
    neck: string;
  }
 export type Action = {
    type: string;
    payload: string;
  };
  export type category =
    | "accessorie"
    | "neck"
    | "backgrounds"
    | "ears"
    | "eyes"
    | "hair"
    | "leg"
    | "mouth";