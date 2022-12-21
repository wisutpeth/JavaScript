// Arrow function with two arguements
const sum = (firstParam, seconParam) => {
    return firstParam + seconParam;
};
console.log(sum(2, 5)); // Prints: 7
 
// Arrow function with no arguments
const printHello = () => {
    console.log("hello");
};
printHello(); // Prints: hello

// Arrow functions with a single argument
const checkWeight = (weight) => {
    console.log(`Baggage weighr : ${weight} kilograms.`);
};
checkWeight(25); // Prints : Baggage weight : 25 kilograms.

// Concise arrow fumctions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60