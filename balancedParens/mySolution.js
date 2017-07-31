var isOpening = function(char) {
  return char === '(' || char === '[' || char === '{';
};

var isClosing = function(char) {
  return char === ')' || char === ']' || char === '}';
};

var map = {
  ')' : '(',
  '}' : '{',
  ']' : '['
};

var isBalanced = function(str) {
  var stack = [];
  
  for (var i = 0; i < str.length; i++) {
    var current = str[i];
    if (isOpening(current)) {
      stack.push(current);
    }
    if (isClosing(current)) {
      var shifted = stack.shift();
      if (shifted !== map[current]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
