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
}


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
}
console.log(`array of RGB colors`, arrayOfRgbColors(3));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexaColor) {
  let r = parseInt(hexaColor.substring(1, 3), 16);
  let g = parseInt(hexaColor.substring(3, 5), 16);
  let b = parseInt(hexaColor.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(`converting HEX to RGB`,convertHexaToRgb('a42d4f'))


// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHex = (rgbColor) => {
  let newArray = rgbColor.split(',');
//   newArray.map(element => {
//  parseInt(element, 16);
//   });

  newArray = newArray.map(element => {
    return parseInt(element, 10).toString(16);
  })
  return newArray.join('');
}
console.log(`converting RGB to HEX`,convertRgbToHex('125,244,255'));

// Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (type, number) => {
  switch (type) {
    case `hexa` : 
      arrayOfHexaColors(number)
      break;
    
    case `rgb` :
      arrayOfRgbColors(number)
      break;
    default:
     'Please enter valid type'; 
      break;
  }
  // type ===  || type === || type === || type === `HEXA` ? 
  //   : type ===  || type === `RGB` ? 
  //   : ;
}
console.log(`generate colors`, generateColors('hexa', 5));

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Write a function called isPrime, which checks if a number is prime number.

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
