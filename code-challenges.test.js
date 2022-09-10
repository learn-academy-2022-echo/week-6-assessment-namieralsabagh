// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("personJob", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () =>{
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
expect(personJob(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})

// ReferenceError: personJob is not defined

// b) Create the function that makes the test pass.

// PseudoCode:
// Declare a function named personJob
// Set the params to value 
// Utilize the name key to get the values we need to capatalize
// Utilize .split to have each word seperate, 
// Utilize .map to and .toUpperCase change first letter of each word 
// Utilize .join to bring the string back together
// Utilize string interpolation to make the function dynamic

const personJob = (value) => {
  return value.map(value => value.name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") + ` is ${value.occupation}.`

  )
}
// Test Suites: 1 passed, 1 total
// Tests: 1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () =>{
   const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
   // Expected output: [ 2, 0, -1, 0 ]
   const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
   // Expected output: [ 2, 1, -1 ]
   expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  })
  })

  // ReferenceError: onlyRemainders is not defined

// b) Create the function that makes the test pass.

// PseudoCode:
// Declare a function named onlyRemainders
// Set the params to array
// Utilize .filter to get the values that are numbers 
// Utilize typeof and set as array2
// Iterate over array2 with .map 
// Utilize modulo 3 to receive the remainders we want from the array

const onlyRemainders = (array) => {
  let array2 = array.filter(value => typeof value === "number")
  return array2.map(value => value % 3)
}

// Test Suites: 1 passed, 1 total
// Tests: 2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubedArray", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () =>{
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
expect(cubedArray(cubeAndSum1)).toEqual(99)
expect(cubedArray(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: cubedArray is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function named cubedArray
// Set the params to array
// Utilize variable sum and set to 0
// Utilize .map to iterate over the array and cube each value
// Return array elements to total the sum

const cubedArray = (array) => {
  let sum = 0
  let array2= array.map(value => 
  value*value*value) 
  return sum = array2.reduce((a,b) => a+b, 0)
}
//Test Suites: 1 passed, 1 total
//Tests: 3 passed, 3 total