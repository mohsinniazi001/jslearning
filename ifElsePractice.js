console.log("Hi here you can look solved if else programs");


console.log("we are writing a prog to calculate electricity bill");

let unit = 28;

let totalBill = 0;

if ( unit < 100 ){

    totalBill = unit * 8;
    console.log(" Total Bill of " + unit + "unit is: " + totalBill);
}else
if ( unit > 100  || unit < 200 ){

    totalBill = unit * 12;
    console.log(" Total Bill of " + unit + "unit is: " + totalBill);
} else
if ( unit > 200  || unit < 300 ){

    totalBill = unit * 15;
    console.log(" Total Bill of " + unit + "unit is: " + totalBill);
}
else if( unit > 300 ){

    totalBill = unit * 20;
    console.log(" Total Bill of " + unit + "unit is: " + totalBill);
}
else{

    console.log("Something went wrong");
}

console.log("Write a program that takes a student's score as input and assigns a letter grade based on the score");

let marks = 92;
// marks = prompt("Enter the total marks of student: ");

if( marks >= 90 || marks <= 100){
    console.log("Grade of Student is: A");
}

else if(marks >= 80 || marks <= 89){

    console.log("Grade of Student is: B");
}
else if(marks >= 70 || marks <= 79){

    console.log("Grade of Student is: C");
}
else if(marks >= 60 || marks <= 69){

    console.log("Grade of Student is: D");
}else {
    console.log("Grade of student is F")
}

console.log("Use conditions to check the color of the traffic light");
// let green, yellow, red;
let lightColor = "Green";
// lightColor = prompt("Please enter Green, Yellow, or Red");

if ( lightColor == "Green"){

    console.log("hey dear Driver dont stop...GO");
}else
if ( lightColor == "Yellow"){

    console.log("hey dear Driver plz slow down you car/bike");

}else if ( lightColor == "Red"){

    console.log("hey dear Driver STOP");
}else 
{
    console.log("Invalid color! Please enter Green, Yellow, or Red.");
}

console.log("Create a program that calculates ticket prices for a movie based on age");

let age = 41;
let ticketPrice = 550;

if(age < 12){

    ticketPrice = ticketPrice * 0.5;
    console.log("Dear you are below 12, Huraa enjoy 50% Discount. After disscount movie ticket price for you is :" + ticketPrice );

}else if(age > 60){

    ticketPrice = ticketPrice * 0.3;
    console.log("Hurra! Dear you are above 60 enjoy 30% Disscount, . After disscount movie ticket price for you is :" + ticketPrice );

}
else{
    console.log("Your Movie Ticket price is :" + ticketPrice);
}

console.log("Create a program to calculate shipping costs based on the weight of a package");

let shippingCost , weight= 3;

if ( weight < 1){
    console.log("Hey enjoy free Shipping.");

}else if ( weight >= 1 || weight <= 5){
    console.log("The Shipping charges for you parcel is 5$" );

}
else if (weight > 5){
    console.log("The Shipping charges for you parcel is 10$" );

}

console.log("Create a program to calculate Restaurant Tip Calculator");

let tip;
let service = "Poor";
totalBill = 1700;
if ( service == "Excellent"){
    tip = totalBill + (totalBill* 0.2);
    console.log("Hey dear for your Excellent service you tip is " + tip);

}else

if ( service == "Good"){
    tip = totalBill + (totalBill* 0.15);
    console.log("Hey dear for your Good service you tip is " + tip);

}
else

if ( service == "Average"){
    tip = totalBill + (totalBill* 0.10);
    console.log("Hey dear for your Good service you tip is " + tip);

}
else

if ( service == "Poor"){
    tip = totalBill + (totalBill* 5/100);
    console.log("Hey dear for your Good service you tip is " + tip);

}

console.log("Write a program that simulates a simple ATM withdrawal system");
let totalBalance, withdrawal = 500;
totalBalance = 8000;

if ( withdrawal <= 0){
    console.log("plz enter valid amoutn to withdraw");
}else 
if ( withdrawal > totalBalance){
    console.log("You dont have sufficeint balance");
}
else if( withdrawal < totalBalance){

    totalBalance = totalBalance - withdrawal;

    console.log(" you withdrawal amount is ", withdrawal, "Thanks for using ATM, Your Current Balance is", totalBalance);

}


