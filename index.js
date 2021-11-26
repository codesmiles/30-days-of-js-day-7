// Declare a function fullName and it print out your full name.

const fullName = () => {
  console.log("Michael Codesmiles");
};

fullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const full_Name = (firstName, lastName) => {
  return firstName, lastName;
};

console.log(full_Name("Michael", "Codesmiles"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = (param1, param2) => {
  return param1 + param2;
};

console.log(addNumbers(2, 4));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (length, width) => {
  let area = length * width;
  return area;
};
console.log(areaOfRectangle(3, 4));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length, width) => {
  let add = length + width;
  let perimeter = 2 * add;
  return perimeter;
};
console.log(perimeterOfRectangle(5, 7));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, width, height) => {
  return length * width * height;
};
console.log(volumeOfRectPrism(2, 3, 4));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (r) => {
  return Math.PI * r ** 2;
};
console.log(areaOfCircle(7));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = (r) => {
  return 2 * Math.PI * r;
};
console.log(circumOfCircle(6));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => {
  return mass / volume;
};
console.log(density(60, 12));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
  return distance / time;
}
console.log(speed(20, 5));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weight = function (mass) {
  const gravity = 10;
  return mass * gravity;
};
console.log(weight(3));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

const convertCelciusToFahrenheit = (Oc) => {
  let of = (Oc * 9) / 5 + 32;
  return of;
};
console.log(convertCelciusToFahrenheit(45));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calcBmi(weight, height) {
  bmi = weight / height ** 2;
  return (bmi < 18.5 ? "Underweight" : bmi >= 18.5 && bmi <= 24.9 ? "Normal" : bmi >= 25 && bmi <= 19.9 ? "Overweight" : bmi > 30 ? "Obese" : "Error");
  
}
 
console.log(calcBmi(60, 1.7));

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) => {
return(month === "December" || month === "January" || month === "February" ? "Winter" : month === "March" || month === "April" || month === "May" ? "Spring" : month === "June" || month === "July" || month === "August" ? "Summer" : month === "September" || month === "October" || month === "November" ? "Autumn" : "Error");

}
console.log(checkSeason("January"));



// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
const findMax = (a, b, c) => {
    if (a > b && a > c) { return a }
    else if (b > a && b > c) { return b }
    else if (c > a && c > b) { return c };
}

console.log(findMax(-21,-4, -1))

// alternative solution(using Math.max method)
const maximum = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log(maximum(0, 10, 5))


// Write a piece of Javascript code to calculate the average of the all numbers from 0 to 100 inclusive (ie. 0, 1,2,…,100). The code should display the message: “The average is …” at the end of the calculation. (10 points).(Past question for NOUN)

function mean(value) {
 let total = 0;
  
 for (i = 0; i <= 100; i++) {
   total += i;
 }
  let average = total / value;

  return average;
}
console.log(mean(100))
