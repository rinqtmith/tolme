import { valIndex, calcTol } from './calculation';

describe('valIndex function', () => {
  let value;
  let arr;

  beforeEach(() => {
    value = 12;
    arr = [
      [0.5, 3],
      [3, 6],
      [6, 30],
      [30, 120],
      [120, 400],
    ];
  });

  it('should return -1 if value is not in array', () => {
    value = 500;
    expect(valIndex(value, arr)).toEqual(-1);
  });

  it('should return index number of value lies between array', () => {
    expect(valIndex(value, arr)).toEqual(2);
  });

  it('should check 1 item arrays in array', () => {
    value = 500;
    arr = [[0.5, 3], [3, 6], [6, 30], [30, 120], [120]];
    expect(valIndex(value, arr)).toEqual(4);
  });
});

describe('calcTol function', () => {
  let value;
  let s;
  let t;
  let c;
  let th;

  beforeEach(() => {
    value = 12;
    s = '2768-1';
    t = 'linear';
    c = 'm';
    th = 0;
  });

  it('should return "Value must be between 0,5 and 4000" if value is higher than 4000 and standard is 2768-1', () => {
    value = 5000;
    expect(calcTol(value, s, t, c, th)).toEqual(
      'Value must be between 0,5 and 4000',
    );
  });

  it('should return 0,2 with default variables', () => {
    expect(calcTol(value, s, t, c, th)).toEqual('0,2');
  });

  it('should return "Value needs to be smaller than 6300" with t is flatLength', () => {
    value = 7000;
    s = '6930-1';
    t = 'flatLength';
    th = 2;
    expect(calcTol(value, s, t, c, th)).toEqual(
      'Value needs to be smaller than 6300',
    );
  });

  it('should return a warning message when thickness is 0 and standart is 6390-1', () => {
    value = 12;
    s = '6930-1';
    t = 'flatLength';
    th = 0;
    expect(calcTol(value, s, t, c, th)).toEqual(
      'Thickness should be greater than 0',
    );
  });

  it('should return a warning message when thickness is "0" and standart is 6390-1', () => {
    value = 12;
    s = '6930-1';
    t = 'flatLength';
    th = '0';
    expect(calcTol(value, s, t, c, th)).toEqual(
      'Thickness should be greater than 0',
    );
  });

  it('should return 0,3 for given variables', () => {
    value = 12;
    s = '6930-1';
    t = 'flatLength';
    th = 4;
    expect(calcTol(value, s, t, c, th)).toEqual('0,3');
  });
});
