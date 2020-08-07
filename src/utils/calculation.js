import { tolValues } from './standards';

// Finding index for values
const valIndex = (value, arr) => {
  const result = arr.findIndex((el) =>
    el.length === 2 ? value > el[0] && value <= el[1] : value > el[0],
  );
  return result;
};

// Calculates the tolerance of given value
export const calcTol = (value, s, t, c, th) => {
  const result = valIndex(value, tolValues[s][t]['valueList']);
  if (th === 0) {
    if (result === -1) {
      return 'Value must be between 0,5 and 4000';
    } else {
      return tolValues[s][t][c][result];
    }
  } else {
    const thickness = valIndex(th, tolValues[s][t]['thicknessList']);
    const arr = tolValues[s][t]['valueList'];
    if (result === -1) {
      return `Value needs to be smaller than ${arr[arr.length - 1][1]}`;
    } else {
      return tolValues[s][t][c][result][thickness];
    }
  }
};
