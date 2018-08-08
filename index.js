//  Write a JavaScript program to display the current day and
//  time in the following format. 
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

today1= new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day = days[ today1.getDay() ];
var month = months[ today1.getMonth() ];
date = today1.getDate()
year = today1.getFullYear()
hours = today1.getHours()
minutes = today1.getMinutes()

document.getElementById("demo").innerHTML = "Today is" + " " +(day ) + " and the current time is " + (hours) + ":" + (today1.getMinutes()<10?'0':'') + today1.getMinutes() 


// Write a JavaScript program to print the contents of the current window.

function printPage() {
    window.print();
}


// Write a JavaScript program to get the current date.

todaysDate = new Date();

var todaysday = days[todaysDate.getDay()];
var thismonth = months[todaysDate.getMonth()];
todaysdate = todaysDate.getDate()
thisyear = todaysDate.getFullYear();

document.getElementById("challenge3").innerHTML = (todaysday) + ", " + (thismonth) + " " + (todaysdate) + ", " + (thisyear)

console.log(todaysday)
console.log(thismonth)

console.log(todaysdate)
console.log(thisyear)


// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 


function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse("");
    var joinArray = reverseArray.join("");

    return joinArray
}

console.log(reverseString("w3resource"))

document.getElementById("reverseStr").innerHTML = (reverseString("w3resource"))


// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

// year = window.prompt("Input a Year : ")
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);


// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

console.log('--------------------');
for (var year = 2014; year <= 2090; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');


// Write a JavaScript program where the program takes a random integer between 1 to 10, 

// the user is then prompted to input a guess number. If the user input matches with guess number, 

// the program will display a message "Good Work" otherwise display a message "Not matched". 


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
  }

  userGuess = window.prompt("Guess a number between 1 and 10 ")

  randomInteger = (getRandomInt(1,11))

  console.log('--------------------');

 
if(userGuess == randomInteger){
    document.getElementById("theanswer").innerHTML = "good guess , the number is " + randomInteger;
} else{
    document.getElementById("theanswer").innerHTML = "u lose! the number is actually " + randomInteger
}
    
  
  console.log(randomInteger)
console.log('--------------------');


// Write a JavaScript program to calculate multiplication and division of two numbers (input from user)