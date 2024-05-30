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
`

}