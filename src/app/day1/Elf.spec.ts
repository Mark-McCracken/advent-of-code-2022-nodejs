import { Elf } from './Elf';

describe('elf', () => {
  it(`Should correctly calculate the input as items`, () => {
    const elf = new Elf(`1000\n2000`);
    expect(elf.items[0]).toBe(1000);
    expect(elf.items[1]).toBe(2000);
    expect(elf.totalCalories).toBe(3000);
  });
  it(`Should throw an error if the input isn't all numbers`, () => {
    const t = () => {
      new Elf(`1000\nnonsense`);
    };
    expect(t).toThrowError();
  });
});
