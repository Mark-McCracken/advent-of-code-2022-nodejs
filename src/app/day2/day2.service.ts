import { Injectable } from '@nestjs/common';
import { Day2Response } from './Day2Response';
import { Choice, Match, Game } from './RockPaperScissors.enum';

@Injectable()
export class Day2Service {
  solve(input: string): Day2Response {
    const match = this.parseInput(input);
    const matchResult: number = this.evaluateMatch(match);
    return this.formatOutput(matchResult);
  }

  parseInput(input: string): Match {
    return input
      .trim()
      .split('\n')
      .map(
        (line) =>
          line
            .trim()
            .split(' ')
            .map((char) => Choice.fromString(char)) as Game,
      );
  }

  evaluateGame(game: Game): number {
    return game[1].playsAgainst(game[0]) + game[1].value;
  }

  evaluateMatch(match: Match): number {
    return match.reduce((a, b) => a + this.evaluateGame(b), 0);
  }

  formatOutput(part1: number): Day2Response {
    return {
      answer: {
        part1,
        part2: 0,
      },
    };
  }
}
