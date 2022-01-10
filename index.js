// easy
//1 Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8
const power = (a, b) => {
  //   return Math.pow(a, b);
  let ans = 1;
  for (let i = 1; i <= b; i++) {
    ans = ans * a;
  }
  return ans;
};
console.log(power(2, 3));

//2 Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
const areaOfHexagon = (length) => {
  const partOne = 3 * Math.sqrt(3);
  const partTwo = Math.pow(length, 2);
  return (partOne * partTwo) / 2;
};
console.log(areaOfHexagon(10));

//3 Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3
const noOfWords = (sentence) => {
  return sentence.split(" ").length;
};
console.log(noOfWords("We are neoGrammers"));

//4 Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)
const findMin = (...rest) => {
  return Math.min(...rest);
};
console.log(findMin(3, 5));
console.log(findMin(3, 5, 9, 1));

//5 Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)
const findMax = (...rest) => {
  return Math.max(...rest);
};
console.log(findMax(3, 5));
console.log(findMax(3, 5, 9, 1));

//6 Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
const typeOfTriangle = (a, b, c) => {
  const sum = a + b + c;
  console.log(sum);
  if (a === b && b === c && c === a && sum === 180) {
    return "Equilateral Triangle";
  } else if ((sum === 180 && a === b) || b === c || a === c) {
    return "Isosceles Triangle";
  } else if (sum === 180 && a !== b && b !== c && a !== c) {
    return "Scalene Traingle";
  } else {
    return "Not a Triangle";
  }
};
console.log(typeOfTriangle(30, 60, 90));

// medium
//1 Given an array, your function should return the length of the array.
// Example:A
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5
const arrayLength = (array) => {
  return array.length;
};
console.log(arrayLength([1, 5, 3, 7, 8]));

//2 Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
const indexOf = (array, a) => {
  //   return array.indexOf(a);
  for (let index = 0; index < array.length; index++) {
    if (array[index] === a) {
      return index;
    }
  }
};
console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

//3 Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
const replace = (array, a, b) => {
  //   return array.map((number) => {
  //     return number === a ? b : number;
  //   });
  let newArr = array;
  console.log(newArr);
  for (let index = 0; index < array.length; index++) {
    if (array[index] === a) {
      newArr[index] = b;
    }
  }
  return newArr;
};
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

//4 Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
const mergeArray = (array1, array2) => {
  return [...array1, ...array2];
};
console.log(mergeArray([1, 3, 5], [2, 4, 6]));

//5 Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c
const charAt = (a, b) => {
  //   return a.charAt(b);
  let char = "";
  for (let i = 0; i <= b; i++) {
    char = a[i];
  }
  return char;
};
console.log(charAt("neoGcamp", 4));

//6 Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
const minDate = (a, b) => {
  const [day1, month1, year1] = a.split("/");
  const [day2, month2, year2] = b.split("/");

  if (year1 === year2) {
    if (month1 === month2) {
      if (day1 === day2) {
        return "Same";
      } else {
        return day1 > day2 ? b : a;
      }
    } else {
      return month1 > month2 ? b : a;
    }
  } else {
    return year1 > year2 ? b : a;
  }
};
console.log(minDate("02/05/2021", "24/01/2021"));

// //hard
//1 Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
const encodeString = (string, a) => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let codedString = "";

  for (let i of string) {
    const index = alphabets.indexOf(i);

    const changingAlpha = index + a;
    codedString +=
      changingAlpha > 27
        ? alphabets[changingAlpha - 27]
        : alphabets[changingAlpha];
  }

  return codedString;
};
console.log(encodeString("neogcamp", 2));

//2 Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
const toSentenceCase = (string) => {
  const splitSentence = string.split(" ");

  for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i][0].toUpperCase() + splitSentence[i].substring(1);
  }
  return splitSentence.join(" ");
};
console.log(toSentenceCase("we are neoGrammers"));

//3 Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
const sortArray = (array) => {
  // return array.sort((a, b) => {
  //     return a - b
  // })
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    let j = i - 1;

    while (j > -1 && array[j] > num) {
      array[j + 1] = array[j];
      console.log(array[j + 1]);
      j--;
    }
    array[j + 1] = num;
    console.log(array);
  }
  return array;
};
console.log(sortArray([100, 83, 32, 9, 45, 61]));

//4 Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
const reverseCharactersOfWord = (string) => {
  let splitedSentence = string.split(" ");
  console.log(splitedSentence);

  for (let i = 0; i < splitedSentence.length; i++) {
    splitedSentence[i] = splitedSentence[i].split("").reverse().join("");
    console.log(splitedSentence);
  }
  return splitedSentence.join(" ");
};
console.log(reverseCharactersOfWord("we are neoGrammers"));
