import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return (
      `Welcome to the Advent of Code 2022 REST API!\n` +
      `Check out advent of code here: https://adventofcode.com/2022/\n` +
      `And check out the repo for this codebase here: https://github.com/Mark-McCracken/advent-of-code-2022-nodejs`
    );
  }

  @Get(`/healthcheck`)
  @ApiOperation({ summary: 'perform basic healthcheck' })
  healthCheck(): string {
    return 'ok';
  }
}
