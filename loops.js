console.log("we are learning....loops");

let name = "Mohsin Khan";

// for (let i = 0; i < 8 ; i++){

//     console.log("I am Programmer");
// }

for ( i = 0 ; i < name.length; i++ ){

    console.log("Your name alphabets are :", name[i]);

}

let x = 0;

for( x= 0; x < 12 ; x ++){
    if( x % 2 == 0){

        console.log("Even Number is :", x);

    }

}
x = 0;
while(x < 6){
    console.log("Mohsin Khan");
    x ++;
}
let m =0;
do{
    console.log("hey you are in do while loop..");

    m++;
}while(m<5)

   // Write a program using for,while, do while loop that prints numbers from 1 to 10.
let numf = 1;
for(numf =1; numf<= 10; numf++){
    console.log("number usign for loop is ", numf)
}
let numw = 1;
while(numw<= 10){
    console.log("number is using while loop is ", numw)
    numw ++;
}
let numd = 1;
do{
    console.log("number is using do while loop is ", numd);
    numd ++;


}while(numd <= 10)


//Use a for loop to calculate and print the sum of the first 10 natural numbers
let nof;
let sum =0;
for(nof =1; nof <=10; nof++){
   
    sum = sum + nof;
    console.log("after adding the no for loop",nof, "is: ", sum);

}
let now =1;
let sumw =0;
while(now <= 10){
   
    sumw = sumw + now;
    console.log("after adding the no while loop",now, "is: ", sumw);
    now++;

}
let nodw =1;
let sumdw =0;
do{
    sumdw = sumdw + nodw;
    
    console.log("after adding the no do while loop",nodw, "is: ", sumdw);
    
    nodw++;

}while(nodw <= 10)
