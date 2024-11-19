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