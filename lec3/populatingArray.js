let arr1 = ["A", true, 2];

console.log("\n*********Lenght and index**********\n");
console.log(arr1.lenght); 
console.log(arr1[3]); //Doesn't exist
console.log(arr1[2]); //Last index of array
console.log(arr1[arr1.lenght - 1]); //Equal 2

console.log("\n**********Lenght and index Part2**********\n");
let arr3 = Array(3); //Empty array of lenght 3
arr3[2] = "Adding a value!";
console.log(arr3[2]); //Last index of array
console.log(arr3[arr3.lenght - 1]); //Index: 2
console.log(arr3[0]); //No value yet
console.log(arr3[1]); //No value yet