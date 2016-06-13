function split (wholeArray) {
  var arrayLength = wholeArray.length;
  var splitPoint = Math.floor(arrayLength/2);
  var firstHalf = wholeArray.splice(0, splitPoint);
  var secondHalf = wholeArray;
  return [firstHalf, secondHalf];
}

