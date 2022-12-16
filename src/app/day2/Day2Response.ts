import { ApiProperty } from '@nestjs/swagger';

export class Answer {
  @ApiProperty()
  part1: number;

  @ApiProperty()
  part2: number;
}

export class Day2Response {
  @ApiProperty()
  answer: Answer;
}
