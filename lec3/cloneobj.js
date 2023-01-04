//Object clonning
//Obj Ref, Obj Clonning assign(), {. . . x}, JSON

const obj1 = {
    person : 'Wisut',
    weight : 70
}

//const obj = obj1;
//const obj2 = object.assign({},obj1);
const obj2 = {... obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);