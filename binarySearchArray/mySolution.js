var binarySearch = function(arr, element) {
	var lowerBound, upperBound, middle, middleElement;
	lowerBound = 0;
  upperBound = arr.length -1;
  
  while (lowerBound <= upperBound) {
		middle = Math.floor((lowerBound + upperBound) / 2);
    middleElement = arr[middle];
    if (element < middleElement) {
			upperBound = middle - 1;
		} else if (element > middleElement) {
			lowerBound = middle + 1;
		} else {
			return middle;
    }
  }
  
  return -1;
}