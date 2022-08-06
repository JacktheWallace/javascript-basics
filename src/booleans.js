function negate(a) {
  if (a === true) {
    return false;
    } else {
    return true;
    }
};

function both(a, b) {
  if (a && b === true) { 
    return true
  } else { 
    return false
  }
};

function either(a, b) {
  if (a === true | b === true) {
    return true 
  } else {
    return false
  }
};

function none(a, b) {
  if (a === false && b === false) {
    return true
  } else {
    return false
    }
  };

function one(a, b) {
  if (a === true && b === false || a === false && b === true) {
    return true 
  } else {
    return false
  }
};

function truthiness(a) {
  if (a) {
    return true
  } else {
    return false
  }
};

function isEqual(a, b) {
  if (a === b) {
    return true
  } else {
    return false
  }
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true 
  } else { 
    return false
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true
  } else {
    return false
  }
};

function isOdd(a) {
  if (a % 2 == 0) {
    return false
  } else {
    return true
  }
};

function isEven(a) {
  if (a % 2 == 0) {
    return true
  } else {
    return false
  }
};

function isSquare(a) {
  const b = Math.trunc(Math.sqrt(a))

  if (a === b*b) { 
    return true
  } else {
    return false
  }
};

function startsWith(char, string) {
  if (char === string.charAt(0)) {
    return true
  } else { 
    return false
  }
};

function containsVowels(string) {

  const vowels = ['a','e','i','o','u']

  let count = 0

  for (let letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++
    }
  }

  if (count >= 1) {
    return true
  } else {
    return false
  }

};

function isLowerCase(string) {
  const upperCase = ['A', 'B', 'C', 'D']
    let count = 0
  for (let letter of string) {
    if (upperCase.includes(letter)) {
      count++
    }
  }

  if (count >= 1) {
    return false
  } else {
    return true
  }

};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
