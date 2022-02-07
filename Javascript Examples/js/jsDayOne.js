 //declare variables (let and const)

 let x = 7; //declared a variable 
 const names = ['Jacqueline', 'Amy', 'Sunil']; //constants cannot be changed 

//let and const are scope sensitive 

//variable types 
//number
//object 
let name = "William"; 
//string (with a bunch of functions that come with similar to Java)
let isFinsihed = false; 
let avg = 87.9; 

let test = 3/2; //yields 1.5
let test2 = 3%2; //yields 1 (remainder)

x ="7";

//null vs undefined

//null is on purpose, undefined is usually NOT on purpose 

//null is an object 

let sample = null; 
let sample2; //undefined is a TYPE 
//console.log(sample3) //this gives us an error and states that it is not defined

/*
typeof null => Object 
typeof 7 => Number 
type of 'hi' => String 
typeof Array() => object
*/ 

/*
== vs ===
=== also checks for type would say 7 === "7" as FALSE 
== would say 7 == "7" to be TRUE 

=== AND !== check the type of the value as well 

false ==0 is true, true ==1 is true
0 and 1 cna be trated as baleeans in some languages. === would maeke it false bc different types
*/ 

//if statements are the same in java and js 

//ternary operator 
let x; 
let isEven; 

 if(x/2 == true)
    isEven == true; 
 else
    isEven ==false;

    //^^instead of above we can also do that

isEven = (x%2 ==0) ? true : false; 

//10 over is yellow 
//20 over or more is red 
//otherweise green 

let colour = (x>20) ? "red" : (x>10)?'yellow': 'green';



//creating functions

function nameOfFunction(x,y){
    return x+y; 
}

let func = function(x,y){
    return x*y; 
}

//anonymous function (function stored i variable)

//arrays
const numbers = Array(10); 
numbers[4] = 3; 
numbers.push(1); //add  to the end of the array and makes it bigger
numbers.pop();  //removes the last element and makes the array length smaller 


//types of for loops for arrays

for (let i=0; i<names.length; i++){
    console.log(names[i])
}

//hits EVERY element even if its undefined 
for (let ii=0; ii<names.length; ii++){
    console.log(names[ii]);
}

//like a foreach loop that skips over the undefined
for (let name of names){
    console.log(name);
}


