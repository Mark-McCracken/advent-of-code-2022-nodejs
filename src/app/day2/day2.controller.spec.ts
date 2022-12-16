import { Test, TestingModule } from '@nestjs/testing';
import { Day2Controller } from './day2.controller';
import { Day2Service } from './day2.service';

describe('Day2Controller', () => {
  let controller: Day2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Day2Controller],
      providers: [Day2Service],
    }).compile();

    controller = module.get<Day2Controller>(Day2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
