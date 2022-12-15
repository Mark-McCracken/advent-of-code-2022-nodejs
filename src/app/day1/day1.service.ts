import { Injectable } from '@nestjs/common';
import { Elf, Elves } from './Elf';
import { Day1Response } from './Day1Response';

@Injectable()
export class Day1Service {
  solve(input: string): Day1Response {
    const elves: Elf[] = this.convertInputToElves(input);
    const biggestElf = this.findBiggestElf(elves);
    const top3Elves = this.findTop3Elves(elves);
    const formatOutput = this.formatOutput(elves, biggestElf, top3Elves);
    return formatOutput;
  }

  convertInputToElves(input: string): Elf[] {
    return input
      .trim()
      .split('\n\n')
      .map((lines) => new Elf(lines));
  }

  sortElves(elves: Elves): Elves {
    return elves.sort((a, b) => b.totalCalories - a.totalCalories);
  }

  findBiggestElf(elves: Elf[]): Elf {
    return this.sortElves(elves)[0];
  }

  findTop3Elves(elves: Elf[]): Elf[] {
    return this.sortElves(elves).slice(0, 3);
  }

  formatOutput(elves: Elves, biggestElf: Elf, top3Elves: Elves) {
    return {
      totalItemsHeld: elves.reduce((prev, curr) => prev + curr.items.length, 0),
      totalElves: elves.length,
      biggestElf: {
        items: biggestElf.items,
        totalCalories: biggestElf.totalCalories,
      },
      answer: {
        part1: biggestElf.totalCalories,
        part2: top3Elves.reduce((prev, curr) => prev + curr.totalCalories, 0),
      },
    };
  }
}
