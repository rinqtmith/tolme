// Tolerance Standards
export const tolStandard = [
  {
    key: 1,
    text: 'DIN ISO 2768-1',
    value: '2768-1',
  },
  {
    key: 2,
    text: 'DIN 6930-1',
    value: '6930-1',
  },
];

// Tolerance Types (may need to change depending on standard)
export const tolType = {
  '2768-1': [
    {
      key: 1,
      text: 'Limits for linear measures',
      value: 'linear',
    },
    {
      key: 2,
      text: 'Limit measures for radius of curvature and chamfer height',
      value: 'radius',
    },
    {
      key: 3,
      text: 'Limit dimensions for angular dimensions (short edge)',
      value: 'angular',
    },
  ],
  '6930-1': [
    {
      key: 1,
      text:
        'Limit dimensions for length dimensions on flat stamped parts except rounding radius',
      value: 'flatLength',
    },
    {
      key: 2,
      text: 'Limit dimensions for rounding radius',
      value: 'flatRadius',
    },
    {
      key: 3,
      text:
        'Limit dimensions in angular units for nominal dimension ranges of the shorter leg',
      value: 'angular',
    },
    {
      key: 4,
      text:
        'Limit dimensions for length dimensions on stamped parts produced by forming except rounding radius',
      value: 'formedLength',
    },
    {
      key: 5,
      text:
        'Limit dimensions for rounding radius (cut, bent and deep-drawn) on stamped parts produced by forming',
      value: 'formedRadius',
    },
  ],
};

// Tolerance Classes
export const tolClass = {
  '2768-1': [
    { key: 1, text: 'Fine (f)', value: 'f' },
    { key: 2, text: 'Medium (m)', value: 'm' },
    { key: 3, text: 'Coarse (c)', value: 'c' },
    { key: 4, text: 'Very Coarse (v)', value: 'v' },
  ],
  '6930-1': [
    { key: 1, text: 'Fine (f)', value: 'f' },
    { key: 2, text: 'Medium (m)', value: 'm' },
    { key: 3, text: 'Coarse (g)', value: 'g' },
    { key: 4, text: 'Very Coarse (sg)', value: 'sg' },
  ],
};

// Tolerance Values
const tolValues = {
  '2768-1': {
    linear: {
      valueList: [
        [0.5, 3],
        [3, 6],
        [6, 30],
        [30, 120],
        [120, 400],
        [400, 1000],
        [1000, 2000],
        [2000, 4000],
      ],
      f: ['0,05', '0,05', '0,1', '0,15', '0,2', '0,3', '0,5', '-'],
      m: ['0,1', '0,1', '0,2', '0,3', '0,5', '0,8', '1,2', '2'],
      c: ['0,15', '0,2', '0,5', '0,8', '1,2', '2', '3', '4'],
      v: ['-', '0,5', '1', '1,5', '2,5', '4', '6', '8'],
    },
    radius: {
      valueList: [
        [0.5, 3],
        [3, 6],
        [6, 4000],
      ],
      f: ['0,2', '0,5', '1'],
      m: ['0,2', '0,5', '1'],
      c: ['0,4', '1', '2'],
      v: ['0,4', '1', '2'],
    },
    angular: {
      valueList: [
        [0, 10],
        [10, 50],
        [50, 120],
        [120, 400],
        [400, 4000],
      ],
      f: ['1°', "30'", "20'", "10'", "5'"],
      m: ['1°', "30'", "20'", "10'", "5'"],
      c: ["1° 30'", '1°', "30'", "15'", "10'"],
      v: ['3°', '2°', '1°', "30'", "20'"],
    },
  },
};

// Calculates the tolerance of given value
export const calcTol = (value, s, t, c, th) => {
  if (th === 0) {
    const result = tolValues[s][t].valueList.findIndex(
      (el) => value > el[0] && value <= el[1],
    );
    if (result === -1) {
      return 'Value must be between 0,5 and 4000';
    } else {
      return tolValues[s][t][c][result];
    }
  } else {
    console.log(value, s, t, c, th);
  }
};
