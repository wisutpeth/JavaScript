const arrayofNumbers = [1, 2, 3, 4];

const sum = arrayofNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); //10