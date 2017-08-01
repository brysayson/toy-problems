var nthfibonacci = function (n) {
	var getFib, memo, nMinusOne, nMinusTwo;
	memo = {};
	getFib =  function (n) {
		if (n === 0 || n === 1) {
			if (!memo[n]) {
				memo[n] = n;
			}
			return memo[n];
		}
		nMinusOne = memo[n-1] || nthfibonacci(n-1);
		nMinusTwo = memo[n-2] || nthfibonacci(n-2);
		memo[n] = nMinusOne + nMinusTwo;
		return memo[n];
	}
	return getFib(n);
}