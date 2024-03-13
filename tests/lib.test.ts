import * as lib from '../lib';

describe('absolute', () => {
  
  it('returns a positive number for positive input', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it('returns a positive number for negative input', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it('returns 0 for 0 input', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
  
});
