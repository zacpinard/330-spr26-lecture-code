import sum from "./sum";

describe('sum', () => {
  it('correctly sums an array of numbers', () => {
    const total = sum([1, 2, 3, 4, 5]);
    expect(total).toEqual(15);
  });

  it('returns 0 when the array is empty', () => {
    const total = sum([]);
    expect(total).toEqual(0);
  });

  it('throws an error when an item is not a number', () => {
    expect(() => {
      sum([1, 2, 3, 4, 'alksdjf']);
    }).toThrow();

    // try {
    //   sum([1, 2, 3, 4, 'alksdjf']);
    // } catch (error) {
    //   // eslint-disable-next-line jest/no-conditional-expect
    //   expect(error).toBeDefined();
    // }
  });
});