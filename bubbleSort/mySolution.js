var bubbleSort = function(arr) {
	var sorted, curr, next;
  sorted = false;
	
  while(!sorted) {
  	sorted = true;
    for (var i = 0; i < arr.length; i++) {
    	curr = arr[i];
      next = arr[i + 1];
      if (curr > next) {
      	temp = curr;
        arr[i] = next;
        arr[i + 1] = curr;
        sorted = false;
			}
		}
	}
  
	return arr;
}