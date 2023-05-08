console.log('This is lecture number 53');

let name = 'Himank';
let name1 = 'Lakshya';
let name2 = 'Hellu';
let name3 = 'Hiiii';

console.log(name + ' is a good boy.');
console.log(name1 + ' is a good boy.');
console.log(name2 + ' is a good boy.');
console.log(name3 + ' is a good boy.');

function greet(name){
    console.log(name + ' is a good boy.')
}
greet(name);
greet(name1);
greet(name2);
greet(name3);

let greetText123 = 'Good Morning';
function greet1(name, greetText123='Greetings from JS.'){
    console.log(greetText123 + " " + name)
    console.log(name + ' is a good boy.')
}
greet1(name, greetText123);
greet1(name1, greetText123);
greet1(name2, greetText123);
greet1(name3);

function sum(a,b,c){
    d = a + b + c;
    return d;
}

let returnVal = sum(1,2,3);
console.log(returnVal);