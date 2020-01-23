// Logical Reasoning
// This test measures your logical reasoning and approach to problems.
// TASK 2
// Using any programming language, write a program that calculates number of times taken to 
// swap adjacent numbers in an array until the highest number is at the beginning of the array 
// while the lowest number is at the end of the array, when given an array with N numbers.
// Test Cases:
// When given the following array of numbers as input, it should return the number in bracket.
// a) [3,2,5,2,5,6,2] (5)
// b) [2,7,5] (2)
// c) [8,5,8,3,0,7,7,1] (3)

function swap(arr = []) {
  let counter = 0;
  if (arr.length <= 1) return counter;
  const arrSz = arr.length;
  const max = Math.max(...arr), min = Math.min(...arr);
  let validFirst = arr[0] === max;
  let validLast = arr[arrSz - 1] === min;

  while (!validFirst || !validLast) {
  
    if (!validFirst) {
      const maxIndex = arr.findIndex(num => num === max);
      // For the larger num, we decrement i
      for (let i = maxIndex; i > 0; i--) {
        if ((i - 1) >= 0 && arr[i] > arr[i - 1]) {
          const tmp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = tmp;
          counter += 1;
        }
      }
    }

    if (!validLast) {
      // Get the last min
      const tmpArr = [...arr];
      const minIndex = (arrSz - 1) - tmpArr.reverse().findIndex(num => num === min);
      // For the larger num, we decrement i
      for (let i = minIndex; i < arrSz; i++) {
        if ((i + 1) < arrSz && arr[i] < arr[i + 1]) {
          const tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
          counter += 1;
        }
      }
    }

    validFirst = arr[0] === max;
    validLast = arr[arrSz - 1] === min;

  }
  return counter;
}

const data1 = [3,2,5,2,5,6,2];
const data2 = [2,7,5];
const data3 = [8,5,8,3,0,7,7,1];
console.log(JSON.stringify(data1), swap(data1));
console.log(JSON.stringify(data2), swap(data2));
console.log(JSON.stringify(data3), swap(data3));