var nthFib = function(n) {
	var memo, nMinusOne, nMinusTwo, getFib;
  memo = {};
  
  getFib = function(number) {
  	if (number === 0 || number === 1) {
    	// if number doesnt exist, store it
    	if(!memo[number]) {
      	memo[number] = number;
			}
      return memo[number];
		}
    nMinusOne = memo[number-1] || nthFib(number-1);
    nMinusTwo = memo[number-2] || nthFib(number-2);
    memo[number] = nMinusOne + nMinusTwo;
    return memo[number];
	}
  
  return getFib(n);
}

nthFib(9);