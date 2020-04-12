function buble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(buble([1, 9, 8, 7, 4, 2, 4, 4]));

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function merge(left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length > 0) {
    return result.concat(left);
  }
  if (right.length > 0) {
    return result.concat(right);
  }
}
console.log(mergeSort([1, 9, 8, 7, 4, 2, 4, 4]));

function quickSort(arr, left, right) {
  if (left < right) {
    const privot = arr[left];
    let _left = left,
      _right = right;
    while (_left < _right) {
      while (_left < _right && arr[_right] > privot) {
        _right--;
      }
      if (_left < _right) {
        arr[_left] = arr[_right];
        _left++;
      }
      while (_left < _right && arr[_left] < privot) {
        _left++;
      }
      if (_left < _right) {
        arr[_right] = arr[_left];
        _right--;
      }
    }
    arr[_left] = privot;
    quickSort(arr, left, _left - 1);
    quickSort(arr, _left + 1, right);
  }
}
const arr = [1, 9, 8, 7, 4, 2, 4, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
