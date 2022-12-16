import { Result, Rock, Paper, Scissors } from './RockPaperScissors.enum';

describe('A Game of Rock, Paper, Scissors', () => {
  it(`Should let rock beat scissors`, () => {
    expect(new Rock().playsAgainst(new Scissors())).toEqual(Result.Win);
  });
  it(`Should let paper beat rock`, () => {
    expect(new Paper().playsAgainst(new Rock())).toEqual(Result.Win);
  });
  it(`Should let scissors beat paper`, () => {
    expect(new Scissors().playsAgainst(new Paper())).toEqual(Result.Win);
  });
  it(`should give a draw if inputs match`, () => {
    expect(new Rock().playsAgainst(new Rock())).toEqual(Result.Draw);
    expect(new Paper().playsAgainst(new Paper())).toEqual(Result.Draw);
    expect(new Scissors().playsAgainst(new Scissors())).toEqual(Result.Draw);
  });
});
