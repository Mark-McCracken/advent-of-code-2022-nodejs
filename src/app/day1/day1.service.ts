import { Injectable } from '@nestjs/common';
import { Elf } from './Elf';

@Injectable()
export class Day1Service {
  solve(input: string) {
    const elves: Elf[] = this.convertInputToElves(input);
    const biggestElf = this.findBiggestElf(elves);
    const formatOutput = this.formatOutput(elves, biggestElf);
    return formatOutput;
  }

  convertInputToElves(input: string): Elf[] {
    return input
      .trim()
      .split('\n\n')
      .map((lines) => new Elf(lines));
  }

  findBiggestElf(elves: Elf[]): Elf {
    return elves.sort((a, b) => b.totalCalories - a.totalCalories)[0];
  }

  formatOutput(elves: Elf[], biggestElf: Elf) {
    return {
      totalItemsHeld: elves.reduce((prev, curr) => prev + curr.items.length, 0),
      totalElves: elves.length,
      biggestElf: {
        items: biggestElf.items,
        totalCalories: biggestElf.totalCalories,
      },
      answer: biggestElf.totalCalories,
    };
  }
}
