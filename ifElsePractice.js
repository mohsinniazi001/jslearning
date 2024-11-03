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
