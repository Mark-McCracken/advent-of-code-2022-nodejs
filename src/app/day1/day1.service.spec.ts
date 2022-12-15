import { Test, TestingModule } from '@nestjs/testing';
import { Day1Service } from './day1.service';
import * as fs from 'fs/promises';
import { Elf } from './Elf';
import { resolve } from 'path';

describe('Day1Service', () => {
  let service: Day1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Day1Service],
    }).compile();

    service = module.get<Day1Service>(Day1Service);
  });

  it('should convert input to elves', async () => {
    const input = String(await fs.readFile(resolve(__dirname, 'sample.txt')));
    const expectedElves: Elf[] = [
      new Elf([1000, 2000, 3000]),
      new Elf([4000]),
      new Elf([5000, 6000]),
      new Elf([7000, 8000, 9000]),
      new Elf([10000]),
    ];
    const output = service.convertInputToElves(input);
    expect(JSON.stringify(output)).toEqual(JSON.stringify(expectedElves));
  });

  it('should find the biggest elf', async () => {
    const elves: Elf[] = [
      new Elf([1000, 2000, 3000]),
      new Elf([9000]),
      new Elf([2000, 4000, 1000, 1000]),
    ];
    const output = service.findBiggestElf(elves);
    expect(output).toEqual(new Elf([9000]));
  });

  it('should format the output', async () => {
    const elves: Elf[] = [
      new Elf([1000, 2000, 3000]),
      new Elf([9000]),
      new Elf([2000, 4000, 1000, 1000]),
    ];
    const biggestElf = elves[1];
    const output = service.formatOutput(elves, biggestElf, elves);
    expect(output).toEqual({
      totalItemsHeld: 8,
      totalElves: 3,
      biggestElf: {
        items: [9000],
        totalCalories: 9000,
      },
      answer: {
        part1: 9000,
        part2: 23000,
      },
    });
  });

  it('should find the top 3 elves', async () => {
    const elves: Elf[] = [
      new Elf([1000, 2000, 3000]),
      new Elf([9000]),
      new Elf([2000, 4000, 1000, 1000]),
      new Elf([6000, 6000]),
      new Elf([10000]),
    ];
    expect(service.findTop3Elves(elves)).toEqual([
      new Elf([6000, 6000]),
      new Elf([10000]),
      new Elf([9000]),
    ]);
  });
});
