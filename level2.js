//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
const solveLinEquation = (a, b, c) => {};

//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// program to solve quadratic equation
const solveQuadratic = (a, b, c) => {
  let discriminant = b ** 2 - 4 * a * c;

  // if discriminant is less than 0, then there are no roots
  if (discriminant < 0) {
    return "No real roots";
  }
  // if discriminant is equal to 0, then there is one root
  else if (discriminant === 0) {
    return -b / (2 * a);

    // if discriminant is greater than 0, then there are two roots
  } else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return x1, x2;
  }
};

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let printArray = function (...values) {
    console.log(`My first written rest parameter(...values) pay attention to the numbers and function expressions`)
    values.forEach((element) => console.log(`So i just notice how the rest operators works in a function ${element} which is cool btw` ));
};
// printArray(1, 2, 3, 4, 5,6,7,8,9,10);

//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
const showDateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${day}/${month}/${year} ${hour}:${minute}`;
    
};
console.log(showDateTime());


//5. Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

const swapValues = (x, y) => {
    x = y;
    y = x;
    return `x = ${x}, y = ${y}`;
};
console.log(swapValues(2, 3));

//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = (array) => {
    let newArr = []
    for (let i = array.length - 1; i >= 0; i--){
        newArr.push(array[i]);
    }
    return newArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']



//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i].toLowerCase());
    }
    return newArr;
}
console.log(capitalizeArray(['aAETwhATHdat', 'bETtateqETR', 'aAFSDGERc']))
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem() {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        newArr.push(arguments[i]);
    }
    return newArr;
}
console.log(addItem(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(...index) {
  const newArr = [];
  newArr.push(...index);
  newArr.pop();
 
  return newArr;
}
console.log(removeItem(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))  

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (number) => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(10));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumOfOdds(10));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
};
console.log(sumOfEven(10));


// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(number) {
  let even = 0;
  let odd = 0;
  if (number < 0) {
    return 'Invalid Input';
  }
  else {

  for (i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      even++;
    } else if (i % 2 !== 0) {
      odd++;
    }
  }  
  }
  
  console.log(`The number of Evens are ${even} \n the number of Odds are ${odd}`);
}
evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.


// Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
}
sumOfArguments(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Write a function which generates a randomUserIp.
const randomUserIp = () => {
  let ip = [];
  for (let i = 0; i <=3; i++) {
    ip.push(Math.floor(Math.random() * 255));
  }
  return ip.join('.');
}
console.log(randomUserIp());

// Write a function which generates a randomMacAddress
const randomMacAddress = () => {
  let mac = [];
  for (let i = 0; i <= 5; i++) {
    mac.push(Math.floor(Math.random() * 255));
  }
  return mac.join(':');
}
console.log(randomMacAddress());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
/*const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

console.log(randomHex());*/


const randomHexaNumberGenerator = () => {
  const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let hexaNumber = '';
  for (let i = 0; i < 6; i++) {
  // console.log(hexa[Math.floor(Math.random() * hexa.length)]); well i got to better understand this shit
    hexaNumber += hexa[Math.floor(Math.random() * hexa.length)];
  }
return hexaNumber;
}
console.log(randomHexaNumberGenerator());


// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// const userIdGenerator = () => 
// `#${Math.floor(Math.random() * 0xffffff)
//   .toString(16)
//   .padEnd(6, "0")}`;

// console.log(userIdGenerator());

// console.log(userIdGenerator());
// 41XTDbE
