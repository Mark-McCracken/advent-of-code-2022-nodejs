import { ApiProperty } from '@nestjs/swagger';
import { Elf } from './Elf';

export class Answer {
  @ApiProperty()
  part1: number;

  @ApiProperty()
  part2: number;
}

export class Day1Response {
  @ApiProperty()
  totalItemsHeld: number;

  @ApiProperty()
  totalElves: number;

  @ApiProperty()
  biggestElf: Elf;

  @ApiProperty()
  answer: Answer;
}
