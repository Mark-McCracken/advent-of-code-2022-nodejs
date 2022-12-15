import { Test, TestingModule } from '@nestjs/testing';
import { Day1Controller } from './day1.controller';
import { Day1Service } from './day1.service';

describe('Day1Controller', () => {
  let controller: Day1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Day1Controller],
      providers: [Day1Service],
    }).compile();

    controller = module.get<Day1Controller>(Day1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
