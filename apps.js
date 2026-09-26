//..........Create a concatenated string variable.


let firstName = "Jerry";
let major = "Digital Media";

let message = "My name is " + firstName + " and I am studying " + major + ".";

console.log(message);
document.write(message);






//................."If" Conditional statement...............



let age = 38;

if (age >= 18) {
    console.log("This user is an adult.");
} else {
    console.log("Denied! User is under age.");
}






//...............Switch Statement............




let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Commencement of the week!");
        break;
    case "Friday":
        console.log("Lets Go! It's Weekend!");
        break;
    default:
        console.log("Another Brand New day.");
}



//................String Method...........


let word = "Jerry";
let upperName = word.toUpperCase();

console.log(upperName);



//...........Two Demonstrated Examples of the  Number method..................


let price = 35.6789;
let roundedPrice = price.toFixed(2);

console.log(roundedPrice);



let discountPrice = 100.9875;
let finalPrice = discountPrice.toFixed(2);

console.log(finalPrice);
