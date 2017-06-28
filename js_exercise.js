function uniq(arr) {
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (!uniqArr.includes(arr[i])) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

// console.log(uniq([1,1,2,2,3,3,5,7,7]));

function twoSum(arr, target) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i,j];
      }
    }
  }

  return [];
}
// if we make good progress return back and do this with better time complexity
// console.log(twoSum([2,3,1,-2,5], 9));

function transpose (arr) {
  let transposedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let innerArray = arr[i];
    let tempArray = [];
    for (let j = 0; j < innerArray.length; j++) {
      tempArray.push(arr[j][i]);
    }
    transposedArray.push(tempArray);
  }

  return tempArray;
}

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
