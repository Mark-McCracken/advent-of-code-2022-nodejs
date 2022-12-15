import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class Elf {
  constructor(input: string | number[]) {
    if (typeof input !== 'string') {
      this.items = input;
      return;
    }
    this.items = input.split('\n').map((str) => Number(str));
    if (this.items.some((item) => isNaN(item))) {
      console.log(
        `Received bad input for an elf's holdings. Here are his items: ${this.items}. Some of these evaluated to NaN, but they should all be valid numbers.`,
      );
      throw new BadRequestException(`bad input for this elf!`);
    }
  }

  @ApiProperty({ type: [Number] })
  readonly items: number[];

  @ApiProperty()
  get totalCalories(): number {
    return this.items.reduce((prev, curr) => prev + curr, 0);
  }
}
