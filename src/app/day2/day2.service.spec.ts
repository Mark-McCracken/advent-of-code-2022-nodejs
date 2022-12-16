import { Test, TestingModule } from '@nestjs/testing';
import { Day2Service } from './day2.service';
import { Rock, Paper, Scissors, Match, Game } from './RockPaperScissors.enum';

describe('Day2Service', () => {
  let service: Day2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Day2Service],
    }).compile();

    service = module.get<Day2Service>(Day2Service);
  });

  it('should convert the input to a match', () => {
    const input = `A Y
      B X
      C Z`;
    const expectedOutput: Match = [
      [new Rock(), new Paper()],
      [new Paper(), new Rock()],
      [new Scissors(), new Scissors()],
    ];
    expect(service.parseInput(input)).toEqual(expectedOutput);
  });

  it('should evaluate your score for a game', () => {
    const game1: Game = [new Rock(), new Paper()];
    expect(service.evaluateGame(game1)).toEqual(8);
    const game2: Game = [new Paper(), new Rock()];
    expect(service.evaluateGame(game2)).toEqual(1);
    const game3: Game = [new Scissors(), new Scissors()];
    expect(service.evaluateGame(game3)).toEqual(6);
  });

  it('should evaluate your score for a match', () => {
    const spy = jest.spyOn(service, 'evaluateGame');
    const mockedReturnedValue = 3;
    spy.mockReturnValue(mockedReturnedValue);
    const match: Match = [
      [new Rock(), new Rock()],
      [new Rock(), new Rock()],
    ];
    expect(service.evaluateMatch(match)).toEqual(
      mockedReturnedValue * match.length,
    );
    expect(spy).toHaveBeenCalledTimes(match.length);
  });
});
