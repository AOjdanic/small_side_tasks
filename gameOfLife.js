"use strict";

//  . X . .                     . . . .                     . . . .
//  . . X .        --->         X . X .        --->         . . X .
//  X X X .      X = alive      . X X .                     X . X .
//  . . . .      . = dead       . X . .                     . X X .

// Each cell with one or no neighbours dies, as if by solitude.
// Each cell with four or more neighbours dies, as if by overpopulation.
// if a living cell has 2 or 3 neighbours it stays alive
// if a dead cell has exactly 3 neighbours it will be born

const lifeboard = [
  [
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
  ],
  [
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
  ],
  [
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
  ],
  [
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
  ],
];

console.log(JSON.stringify(lifeboard));

const checkNeighbours = function (array, i, j) {
  //   console.log(i, j);
  let numberOfNeighbours = 0;
  if (i == 0) {
    if (j == 0) {
      if (array[i][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
    } else if (j == array.length - 1) {
      if (array[i][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
    } else {
      if (array[i][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
    }
  } else if (i == array.length - 1) {
    if (j == 0) {
      if (array[i][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
    } else if (j == array.length - 1) {
      if (array[i][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
    } else {
      if (array[i][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
    }
  } else {
    if (j == 0) {
      if (array[i - 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
    } else if (j == array.length - 1) {
      if (array[i - 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j] === 1) {
        numberOfNeighbours++;
      }
    } else {
      if (array[i][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i - 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j - 1] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j] === 1) {
        numberOfNeighbours++;
      }
      if (array[i + 1][j + 1] === 1) {
        numberOfNeighbours++;
      }
    }
  }

  return numberOfNeighbours;
};

const gameOfLife = function (array) {
  //   debugger;
  let newArray = [[], [], [], []];
  const numberOfGenerations = 1;
  let numberOfNeighbours = 0;
  for (let g = 0; g < numberOfGenerations; g++) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        numberOfNeighbours = checkNeighbours(array, i, j);

        if (array[i][j] === 1) {
          if (numberOfNeighbours == 0 || numberOfNeighbours == 1) {
            newArray[i][j] = 0;
          }
          if (numberOfNeighbours >= 4) {
            newArray[i][j] = 0;
          }
          if (numberOfNeighbours == 2 || numberOfNeighbours == 3) {
            newArray[i][j] = 1;
          }
        } else if (array[i][j] === 0) {
          if (numberOfNeighbours == 3) {
            newArray[i][j] = 1;
          } else {
            newArray[i][j] = array[i][j];
          }
        }
      }
    }
    console.log(JSON.stringify(newArray));
  }
};

gameOfLife(lifeboard);
