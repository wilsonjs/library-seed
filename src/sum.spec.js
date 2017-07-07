import sum from './sum';

describe('sum', () => {
  it('sums up 1 number', () => {
    expect(sum(7)).toBe(7);
  });

  it('sums up 2 numbers', () => {
    expect(sum(7, 8)).toBe(15);
  });

  it('sums up more than 2 numbers', () => {
    expect(sum(7, 8, 9)).toBe(24);
  });
});
