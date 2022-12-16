export abstract class Choice {
  value: number;
  abstract playsAgainst(input: Choice): Result;
  static fromString(input: string): Choice {
    switch (input) {
      case 'A':
      case 'X':
        return new Rock();
      case 'B':
      case 'Y':
        return new Paper();
      case 'C':
      case 'Z':
        return new Scissors();
      default:
        throw new Error(`Invalid input: ${input}`);
    }
  }
}

export enum Result {
  Win = 6,
  Draw = 3,
  Loss = 0,
}

export class Rock {
  value = 1;
  playsAgainst(input: Choice): Result {
    if (input instanceof Rock) return Result.Draw;
    return input instanceof Scissors ? Result.Win : Result.Loss;
  }
}

export class Paper {
  value = 2;
  playsAgainst(input: Choice): Result {
    if (input instanceof Paper) return Result.Draw;
    return input instanceof Rock ? Result.Win : Result.Loss;
  }
}

export class Scissors {
  value = 3;
  playsAgainst(input: Choice): Result {
    if (input instanceof Scissors) return Result.Draw;
    return input instanceof Paper ? Result.Win : Result.Loss;
  }
}

export type Game = [Choice, Choice];
export type Match = Game[];
