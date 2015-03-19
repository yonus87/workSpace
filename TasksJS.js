//Task 1 - The Age Calculator 
//Calculating age based on the difference between the birth year and current year
function calculateAge( birthYear, currentYear )
{
  if(birthYear == ""){
   return "<font color='red'><i>Please enter a valid birthYear.</i></font>";
  }
  else if(currentYear == ""){
    return "<font color='red'><i>Please enter a valid current Year.</i></font>";
  }
  else{
  var currentAge = currentYear - birthYear;
  //alert("You are either "+ currentAge + " years or " + (currentAge-1) +" years old.");
  return "You are either "+ currentAge + " years or " + (currentAge-1) +" years old.";
  }
}

//calculateAge(1987,2015);
//calculateAge(1991,2015);
//calculateAge(1981,2015);

// Task 1 BONUS
// Fetching the current year from date object and calculating the age.
function calculateAgeusingBirthYear( birthYear )
{
  if(birthYear == ""){
   return "<font color='red'><i>Please enter a valid birthYear.</i></font>";
  }
  else{
  
  var todayDate = new Date();
  var currentYear = todayDate.getFullYear();
  var currentAge = currentYear - birthYear;
  //alert("You are either "+ currentAge + " years or " + (currentAge-1) +" years old.");
  return "You are either "+ currentAge + " years or " + (currentAge-1) +" years old.";
  }
}

//calculateAgeusingBirthYear(1987);

// Task 2 - The Lifetime Supply Calculator
 var MAX_AGE = 80;
 function calculateSupply ( age, amount )
 {
   if(age == ""){
    return "<font color='red'><i>Please enter a valid age.</i></font>";
   }
   else if(amount == ""){
    return "<font color='red'><i>Please enter a valid amount.</i></font>";
   }
   if(age >= MAX_AGE){
     return "<font color='red'><i>Please enter an age less than the maximum age("+MAX_AGE+").</i></font>";
   }
   else{   
   var totalAmount = (MAX_AGE - age) * amount * 365;
   //alert("You will need "+ totalAmount +" to last you until the ripe old age of "+ MAX_AGE +".");
   return "You will need "+ Math.round(totalAmount) +" to last you until the ripe old age of "+ MAX_AGE +".";
   }
 }
 
 //calculateSupply(27,30);
 //calculateSupply(25,40);
 //calculateSupply(33,16);
 
 //Task 2 BONUS
 function calculateSupplywithFloat ( age, amountFloat )
 {
   if(age == ""){
    return "<font color='red'><i>Please enter a valid age.</i></font>";
   }
   else if(amount == ""){
    return "<font color='red'><i>Please enter a valid amount.</i></font>";
   }
   if(age >= MAX_AGE){
     return "<font color='red'><i>Please enter an age less than the maximum age("+MAX_AGE+").</i></font>";
   }
   else{   
   var totalAmount = Math.round((MAX_AGE - age) * amountFloat * 365.0);
   //alert("You will need "+ totalAmount +" to last you until the ripe old age of "+ MAX_AGE +".");
   return "You will need "+ totalAmount +" to last you until the ripe old age of "+ MAX_AGE +".";
   }
 }
 
 //calculateSupplywithFloat(27,28.445);
 
 // Task 3 - The Geometrizer
 function calcCircumfrence( radius )
 {
    if(radius ==""){
	 return "<font color='red'><i>Please enter a valid radius.</i></font>";
	}
	else{
	var circumfrence = 2* Math.PI * radius;
	//alert("The circumference is "+ Math.round(circumfrence) + "."); 
    return "The circumference is "+ Math.round(circumfrence) + ".";
    }
 }
 
 function calcArea( radius )
 {
    if(radius ==""){
	 return "<font color='red'><i>Please enter a valid radius.</i></font>";
	}
	else{
    var area = Math.PI * Math.pow(radius,2);
	//alert("The area is "+ Math.round(area) + "."); 
    return "The area is "+ Math.round(area) + ".";
    }
 }
 
 // Task 4 - The Temperature Convertor
 function celsiusToFahrenheit(tempCelsius)
 {
    if(tempCelsius ==""){
	 return "<font color='red'><i>Please enter a valid temperature for conversion.</i></font>";
	}
	else{
    var tempFahrenheit = ((9 * tempCelsius)/5) + 32;
	//alert(tempCelsius+"°C is "+ Math.floor(tempFahrenheit) +"°F.");
    return tempCelsius+"°C is "+ Math.floor(tempFahrenheit) +"°F.";
    }
 }
 
 function fahrenheitToCelsius(tempFahrenheit)
 {
    if(tempFahrenheit ==""){
	 return "<font color='red'><i>Please enter a valid temperature for conversion.</i></font>";
	}
	else{
    var tempCelsius = ((tempFahrenheit - 32) * 5)/9;
	//alert(tempFahrenheit+"°F is "+ Math.floor(tempCelsius) +"°C.");
    return tempCelsius+"°C is "+ Math.floor(tempFahrenheit) +"°F.";
    }
 }
 
