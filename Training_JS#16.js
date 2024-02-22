// Methods of String object--slice(), substring() and substr()
function cutIt(arr) {
  
  let shortestLength = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortestLength) {
      shortestLength = arr[i].length;
    }
  }

  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, shortestLength);
  }

  return arr;
}
