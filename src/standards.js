export const tolStandard = [
  {
    key: 1,
    text: "DIN ISO 2768-1",
    value: "2768-1",
  },
];

export const tolType = [
  {
    key: 1,
    text: "Limits for linear measures",
    value: "linear",
  },
  {
    key: 2,
    text: "Limit measures for radius of curvature and chamfer height",
    value: "radius",
  },
  {
    key: 3,
    text: "Limit dimensions for angular dimensions",
    value: "angular",
  },
];

export const tolClass = [
  { key: 1, text: "Fine", value: "f" },
  { key: 2, text: "Medium", value: "m" },
  { key: 3, text: "Coarse", value: "c" },
  { key: 4, text: "Very Coarse", value: "v" },
];

const tolValues = {
  "2768-1": {
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
      f: ["0,05", "0,05", "0,1", "0,15", "0,2", "0,3", "0,5", "-"],
      m: ["0,1", "0,1", "0,2", "0,3", "0,5", "0,8", "1,2", "2"],
      c: ["0,15", "0,2", "0,5", "0,8", "1,2", "2", "3", "4"],
      v: ["-", "0,5", "1", "1,5", "2,5", "4", "6", "8"],
    },
    radius: {
      valueList: [
        [0.5, 3],
        [3, 6],
        [6, 4000],
      ],
      f: ["0,2", "0,5", "1"],
      m: ["0,2", "0,5", "1"],
      c: ["0,4", "1", "2"],
      v: ["0,4", "1", "2"],
    },
    angular: {
      valueList: [
        [0, 10],
        [10, 50],
        [50, 120],
        [120, 400],
        [400, 4000],
      ],
      f: ["1°", "30'", "20'", "10'", "5'"],
      m: ["1°", "30'", "20'", "10'", "5'"],
      c: ["1° 30'", "1°", "30'", "15'", "10'"],
      v: ["3°", "2°", "1°", "30'", "20'"],
    },
  },
};

export const calcTol = (value, s, t, c) => {
  const result = tolValues[s][t].valueList.findIndex(
    (el) => value > el[0] && value <= el[1]
  );
  if (result === -1) {
    return "Value must be between 0,5 and 4000";
  } else {
    return tolValues[s][t][c][result];
  }
};
