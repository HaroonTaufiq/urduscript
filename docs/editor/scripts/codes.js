var CODES = {
//hello
"Hello" : `/*
Neche UrduScript likhen.
Code chalane k liye Run pe click karen.
*/

likho("Salam, Dunya")
`,
// var
"Variable": `// declare variable
rakho naam = "Ali"

// output to screen
likho(naam)
`,

// foreach
"ForEach": `// variable
rakho list = ["Ahmed", "Sara", "Qasim"]

// foreach loop. Iterate over 'list' array
har list k naam per{
  // output to screen
  likho(naam)
}
`,

// if-else
"If-Else": `// declare variable
rakho naam = "Asad"

// if else
agar (naam){
  likho("Salam, " + naam)
}
warna {
  likho("Naam khali hai")
}
`,

// prompt
"Prompt/GetLine": `//prompt: ask for input from user
rakho naam = pucho("Apna naam likhen")

// if else
agar (naam){
  likho("Salam, " + naam)
}
warna {
  likho("Naam khali hai")
}
`,

// function
"Function": `// function is 'kaam'
kaam salaam(naam){
	agar (naam){
    likho("Salam, " + naam)
  }
  warna {
    likho("Naam khali hai")
  }
}

// calling function
salaam("Asad")
`,

"While": `// declare a variable
rakho a = 10

// while is 'jabtak'
jabtak( a>0 ){
	likho(a)
	a--
}
`,
"Do-While":`// ask age until given
karo{
  age = pucho("Apni age likhen")
}
jabtak(!age)
likho("Apki age " + age + " hai")
`,
"Recursion(Fibonacci)": `// recursive function
kaam fibonacci(num) {
	// base case
  agar (num <= 1) bhejo 1;
	
	// recursion
  bhejo fibonacci(num - 1) + fibonacci(num - 2);
}

likho(fibonacci(5))
`,
// addition
"Addition": `// declare variables
rakho num1 = 5
rakho num2 = 10

// addition
rakho sum = num1 + num2

// output to screen
likho("The sum is " + sum)
`,
// subtraction
"Subtraction": `// declare variables
rakho num1 = 10
rakho num2 = 5

// subtraction
rakho difference = num1 - num2

// output to screen
likho("The difference is " + difference)
`,

// multiplication
"Multiplication": `// declare variables
rakho num1 = 5
rakho num2 = 10

// multiplication
rakho product = num1 * num2

// output to screen
likho("The product is " + product)
`,

// division
"Division": `// declare variables
rakho num1 = 10
rakho num2 = 5

// division
rakho quotient = num1 / num2

// output to screen
likho("The quotient is " + quotient)
`,
// factorial
"Factorial": `// Recursive function to calculate factorial
kaam factorial(n) {
  agar (n === 0) {
    bhejo 1
  } warna {
    bhejo n * factorial(n - 1)
  }
}

likho(factorial(5)) // Output: 120
`,
// map
"Map": `// Declare an array
rakho numbers = [10, 20, 30, 40, 50]

// map() method
rakho doubledNumbers = numbers.map(function(num) {
  bhejo num * 2
})
likho(doubledNumbers) // Output: [20, 40, 60, 80, 100]
`,

// filter
"Filter": `// Declare an array
rakho numbers = [10, 20, 30, 40, 50]

// filter() method
rakho evenNumbers = numbers.filter(function(num) {
  bhejo num % 2 === 0
})
likho(evenNumbers) // Output: [10, 20, 30, 40, 50]
`,

// reduce
"Reduce": `// Declare an array
rakho numbers = [10, 20, 30, 40, 50]

// reduce() method
rakho sum = numbers.reduce(function(acc, num) {
  bhejo acc + num
}, 0)
likho(sum) // Output: 150
`,
// switch-case
"SwitchCase": `// Switch-case statement
kaam chooseDay(dayNumber) {
  rakho dayName

  switch (dayNumber) {
    case 1:
      dayName = "Pir"
      bhejo dayName
    case 2:
      dayName = "Mangal"
      bhejo dayName
    case 3:
      dayName = "Budh"
      bhejo dayName
    case 4:
      dayName = "Jumerat"
      bhejo dayName
    case 5:
      dayName = "Jummah"
      bhejo dayName
    case 6:
      dayName = "Hafta"
      bhejo dayName
    case 7:
      dayName = "Itwaar"
      bhejo dayName
    khaali:
      dayName = "Ghalat din number"
      bhejo dayName
  }
}

// Example usage
rakho dinNumber = 5
likho("Aaj ka din hai: " + chooseDay(dinNumber))
`

}