Array.prototype.uniq = function() {
  let uniqArr = [];
  for (let i = 0; i < this.length; i++) {

    if (!uniqArr.includes(this[i])) {
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
};

// console.log(uniq([1,1,2,2,3,3,5,7,7]));

Array.prototype.twoSum = function (target) {

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === target) {
        return [i,j];
      }
    }
  }

  return [];
};
// if we make good progress return back and do this with better time complexity
// console.log([2,3,1,-2,5].twoSum(4));

Array.prototype.transpose = function () {
  let transposedArray = [];
  for (let i = 0; i < this.length; i++) {
    let innerArray = this[i];
    let tempArray = [];
    for (let j = 0; j < innerArray.length; j++) {
      tempArray.push(this[j][i]);
    }
    transposedArray.push(tempArray);
  }

  return transposedArray;
};

// console.log([[1,2,3],[4,5,6],[7,8,9]].transpose());

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

// [1, 2, 3, 4].myEach((el) => console.log(el));

Array.prototype.myMap = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
  }
  return resultArray;
};

// console.log([1, 2, 3, 4].myMap((el) => el * 2));

Array.prototype.myReduce = function (callback, initialValue) {
  let ctr = 0;
  if (initialValue === undefined) {
    initialValue = this[0];
    ctr += 1;
  }
  let accumulator = initialValue;
  for (ctr; ctr < this.length; ctr++) {
    accumulator = callback(accumulator, this[ctr]);
  }
  return accumulator;
};
//
// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25));

Array.prototype.bubblesort = function () {
  let sortedArray = this.slice(0);
  let sorted = true;
  while (true) {
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[ i + 1 ]) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[i+1];
        sortedArray[i+1] = temp;
        sorted = false;
      }
    }
    if (sorted) break;
    sorted = true;
  }

  return sortedArray;
};

// console.log([3,5,1,2,4].bubblesort());

String.prototype.substrings = function () {
  let substrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length+1; j++) {
      substrings.push(this.slice(i, j));
    }
  }

  return substrings;
};

// console.log("helloworld".substrings());

function range (start, end) {
  if (start >= end) return [end];
  let rangeArray = [start];
  return rangeArray.concat(range(start + 1, end));
}

// console.log(range(4, 4));

function sumRec (arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return (arr[0] + sumRec(arr.slice(1)));
}

console.log(sumRec([3, 5, -7, 10]));
