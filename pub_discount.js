const age = 17;
const isFemale = true;
const driverStatus = 'bob';
const firstName = "Marianne"
const billDrinks =20;
const totalAmount = 20;

if (isFemale){
    console.log("Tickets for our famous ladies night are now for sale!");
} else {console.log("Sorry, ladies night is for women only");}

if (driverStatus == 'bob'){
    console.log("Your driver status is bob, so you are allowed to drive");
} else {console.log("You don't have the driver status bob, so you are not allowed to drive");}

if (age>=18 && age<=25){
    console.log("You get 50% discount!")
}  else if(age<18){
    console.log("Unfortunately you are too young to enter te pub")
} else {
    console.log("Sorry, no discount for you. But you are welcome to enter our pub")
} 
if (firstName == "Bram" || firstName=="Sarah"){
        console.log("Free beer for you!")
} else {console.log ("Celebrate our 50th birthday with us!")}

if (billDrinks>50){
    console.log("You get free (veggie) bitterballen!")
} else {console.log("Order more drinks and get free (veggie) bitterballen!")}

if (totalAmount >50){
    console.log("You get free nacho's!")
} else if (totalAmount>100){
    console.log("You get a free bottle of champagne!")
} 
