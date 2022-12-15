import { ApiProperty } from '@nestjs/swagger';
import { Elf } from './Elf';

export class Day1Response {
  @ApiProperty()
  totalItemsHeld: number;

  @ApiProperty()
  totalElves: number;

  @ApiProperty()
  biggestElf: Elf;

  @ApiProperty()
  answer: number;
}
