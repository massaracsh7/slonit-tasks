function mySlice(arr, start, end) {
  if (start === undefined) start = 0;
  if (end === undefined) end = arr.length;
  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;

  const result = [];
  for (let i = start; i < end; i++) {
    result[result.length] = arr[i]; 
  }
  return result;
}

function myIndexOf(arr, item, from) {
  if (from === undefined) from = 0;
  if (from < 0) from = arr.length + from;

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

function myIncludes(arr, item, from) {
  if (from === undefined) from = 0;
  if (from < 0) from = arr.length + from;

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
