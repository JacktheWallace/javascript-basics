const getNthElement = (index, array) => {
  if (index >= array.length) {
    return array[index - 4]
  } else {
  return array[index]
  }
};

const arrayToCSVString = array => {
  return array.toString()
};

const csvStringToArray = string => {

const array = string.split(',')

return array
   
};

const addToArray = (element, array) => {
 
  array.push(element)

};

const addToArray2 = (element, array) => {
  
 return [...array, element]

};

const removeNthElement = (index, array) => {
    array.splice(index, 1)
};

const numbersToStrings = numbers => {
return numbers.map(String)
};

const uppercaseWordsInArray = strings => {
    return strings.map(element => {
      return element.toUpperCase();
    });
};

const reverseWordsInArray = strings => {
  return strings.map(element => {
    newElement = element.split("")
    newElement.reverse()
    newElement = newElement.join("")
    return newElement;
     });
    };

const onlyEven = numbers => { 
 return numbers.filter(number => {return number % 2 === 0})
};

const removeNthElement2 = (index, array) => {

  return array.filter((word, pos) => pos !== index)

};

const elementsStartingWithAVowel = strings => {
  
  return strings.filter((el) => /^[aeiou]/i.test(el))   

};

const removeSpaces = string => {
  return string.split(' ').join('')
};

const sumNumbers = numbers => {
  return numbers.reduce((prev, acc) => prev + acc, 0)
};

const sortByLastLetter = strings => {

  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
