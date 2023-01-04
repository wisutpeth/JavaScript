const cat = {
    name: "Pipey",
    age: 8,
    whatname() {
        return this.name;
    },
};

console.log(cat.whatname());
//Output: Pipey
cat.name = "Nezzar";
console.log(cat.whatname());