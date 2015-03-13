//Task 1 - The Age Calcculator 
//Calculating age based on the difference between the birth year and current year
function calculateAge( birthYear, currentYear )
{
  currentAge = currentYear - birthYear;
  alert("You are either "+ currentAge + " years or " + (currentAge-1) +" years old.");

}

//calculateAge(1987,2015);
//calculateAge(1991,2015);
//calculateAge(1981,2015);

// Task 1 BONUS
// Fetching the current year from date object and calculating the age.
function calculateAgeusingBirthYear( birthYear )
{
  todayDate = new Date();
  currentYear = todayDate.getFullYear();
  currentAge = currentYear - birthYear;
  alert("You are either "+ currentAge + " years or " + (currentAge-1) +" years old.");
}

//calculateAgeusingBirthYear(1987);

// Task 2 - The Lifetime Supply Calculator
 MAX_AGE = 80;
 function calculateSupply ( age, amount )
 {
   totalAmount = (MAX_AGE - age) * amount * 365;
   alert("You will need "+ totalAmount +" to last you until the ripe old age of "+ MAX_AGE +".");
 
 }
 
 //calculateSupply(27,30);
 //calculateSupply(25,40);
 //calculateSupply(33,16);
 
 //Task 2 BONUS
 function calculateSupplywithFloat ( age, amountFloat )
 {
   totalAmount = Math.round((MAX_AGE - age) * amountFloat * 365.0);
   alert("You will need "+ totalAmount +" to last you until the ripe old age of "+ MAX_AGE +".");
 
 }
 
 //calculateSupplywithFloat(27,28.445);
 
 // Task 3 - The Geometrizer
 function calcCircumfrence( radius )
 {
    circumfrence = 2* Math.PI * radius;
	alert("The circumference is "+ Math.round(circumfrence) + "."); 
 
 }
 
 function calcArea( radius )
 {
    area = Math.PI * Math.pow(radius,2);
	alert("The area is "+ Math.round(area) + "."); 
 
 }
 
 // Task 4 - The Temperature Convertor
 function celsiusToFahrenheit()
 {
    tempCelsius = 35;
    tempFahrenheit = ((9 * tempCelsius)/5) + 32;
	alert(tempCelsius+"°C is "+ Math.floor(tempFahrenheit) +"°F.");
 
 }
 
 function fahrenheitToCelsius()
 {
    tempFahrenheit = 156;
    tempCelsius = ((tempFahrenheit - 32) * 5)/9;
	alert(tempFahrenheit+"°F is "+ Math.floor(tempCelsius) +"°C.");
 
 }
 
 