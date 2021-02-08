import { Character } from "./character";

export interface CharacterResults {
  info: {
    count: string;
    pages: number;
    next: string;
    prev: string;
  };

  results: Character[];
}
