// Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

const userIdGeneratedByUser = (numChar, numId) => {
  // let numChar = prompt(`Enter the number of characters`, `e.g 5`);
  // let numId = prompt(`Enter the number of ids`, `e.g 3`);
  // numChar = parseInt(numChar);
  // numId = parseInt(numId);

  const userId = [];
  const userId2 = [];

  let alphabet = `qwertyuiopasdfghjklzxcvbnm`;
  let alphabetCap = alphabet.toUpperCase();
  let numbers = `1234567890`;
  
  alphabet = alphabet.split(``);
  alphabetCap = alphabetCap.split('');
  numbers = numbers.split(``);
  
  let char = alphabet.concat(alphabetCap, numbers);
  
  for (i = 0; i < numId; i++) { 
    for (j = 0; j < numChar; j++) {
      userId.push(char[Math.floor(Math.random() * char.length)]);
    }
    userId2.push(userId.join(``));
  }
  return userId2;

};
console.log(userIdGeneratedByUser(3, 5));

// Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  console.log(`rgb(${r}, ${g}, ${b})`);
};

rgbColorGenerator();
// rgb(125,244,255)

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = (number) => {
  let colors = [];
  for (let i = 0; i < number; i++) {
    colors.push(Math.floor(Math.random() * 16777215).toString(16));
  }
  return colors;
};

console.log(`array of colors`, arrayOfHexaColors(3));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const arrayOfRgbColors = (number) => {
  let colors = [];
  for (let i = 0; i < number; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return colors;
};
console.log(`array of RGB colors`, arrayOfRgbColors(3));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexaColor) {
  let r = parseInt(hexaColor.substring(1, 3), 16);
  let g = parseInt(hexaColor.substring(3, 5), 16);
  let b = parseInt(hexaColor.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(`converting HEX to RGB`, convertHexaToRgb("a42d4f"));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHex = (rgbColor) => {
  let newArray = rgbColor.split(",");
  //   newArray.map(element => {
  //  parseInt(element, 16);
  //   });

  newArray = newArray.map((element) => {
    return parseInt(element, 10).toString(16);
  });
  return newArray.join("");
};
console.log(`converting RGB to HEX`, convertRgbToHex("125,244,255"));

// Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (type, number) => {
  if (type === `hexa`) {
    return arrayOfHexaColors(number);
  } else if (type === `rgb`) {
    return arrayOfRgbColors(number);
  } else {
    return `type is neither hexadecimal or rgb spectrum`;
  }
};
console.log(`generate colors`, generateColors("hexa", 5));

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (param) => {
  let shuffleArray = param.sort(() => Math.random() - 0.5);
};

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (num) => {
  val = 1;
  for (i = 1; i <= num; i++) {
    val *= i;
  }
  return val;
};

console.log(factorial(10));

// ALTERNATIVE

function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

console.log(factorialize(10));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (param) => {
  if (param === undefined) {
    return `The parameter is empty`;
  } else {
    return `The parameter is not empty`;
  }
};
console.log(isEmpty());
console.log(isEmpty(2));

// Call your function sum, it takes any number of arguments and it returns the sum.
const sum = (...args) => {
  let finalVal = 0;
  for (i = 0; i < args.length; i++) {
    finalVal += args[i];
  }
  return finalVal;
};

console.log(sum(1, 2, 3, 4, 5));

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
const sumOfArrayItems = (args) => {
  let finalVal = 0;

  for (i = 0; i < args.length; i++) {
    if (typeof args[i] === `number`) {
      finalVal += args[i];
    } else {
      return `NO or NOT ALL INTEGER VALUES`;
    }
  }
  return finalVal;
};
console.log(sumOfArrayItems([2, 4, 3]));

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
const average = (param) => {
  let sum = 0;
  param = param.map((num) => (sum += num));
  return sum / param.length;
};
console.log(average([2, 4, 6, 8]));

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
const modifyArray = (arr) => {
  if (arr.length >= 5) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  } else {
    return `Item not found`;
  }
};
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
//   'Not Found'

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let k = 2; k < num; k++) {
    if (num % k == 0) {
      return `${num} isn't a prime number`;
    }
  }
  return `${num} is a prime number`;
}
console.log(isPrime(5));
console.log(isPrime(4));

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code. If you want to compare your solution with my solution, check this link.
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = (person) => {
  const { firstName, lastName, age, country, job, skills, languages } = person;

  console.log(
    `${firstName} ${lastName} is ${age} years old. He lives in ${country}. He is a ${job} and his skills are ${skills}. He speaks ${languages}`
  );
};

getPersonInfo(person);

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

function anagram(a, b) {
  if (a.length === b.length) {
    const aSort = a.split("").sort().join();
    const bSort = b.split("").sort().join();

    if (aSort === bSort) {
      return `${a} and ${b} are anagrams to each other`;
    } else {
      return `${a} and ${b} are not anagram to each other`;
    }
  } else {
    return `${a} and ${b} are not of equal length`;
  }
}

console.log(anagram(`silent`, `listener`));

// WRITE A PROGRAM THAT PRINTS 10 RANDOM PHONE NUMBERS. THE NUMBERS MUST BE 11 DIGITS LONG AND MUST HAVE 081,080,070 OR 090.

const produceRandPhoneNumber = () => {
  const phoneNumber = [];
  let prefixNum = [`080`, `081`, `090`, `081`, `070`];
  const numberArr = [];

  for (let i = 0; i < 10; i++) {
    let randNum = Math.floor(Math.random() * prefixNum.length);
    phoneNumber.push(prefixNum[randNum] + Math.floor(Math.random() * 9999999));
  }

  // Look into this later

  // for (let i = 0; i < 10; i++) {

  //   for (i = 0; i < 1; i++) {
  //     let randNum = Math.floor(Math.random() * prefixNum.length);
  //     phoneNumber.push(prefixNum[randNum]);
  //     for (let j = 0; j < 8; j++) {
  //       phoneNumber.push(Math.floor(Math.random() * 10));
  //     }
  //     }

  //     numberArr.push(phoneNumber);
  //   }

  return phoneNumber.join(", ");
};
console.log(produceRandPhoneNumber());
