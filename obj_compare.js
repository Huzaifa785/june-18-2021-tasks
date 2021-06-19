var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let result = console.log(JSON.stringify(obj1)==JSON.stringify(obj2)); // it will return false 
