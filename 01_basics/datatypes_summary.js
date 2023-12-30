// primitive datatype

// 7 types:=
// String ,Number , Boolean , Null , Undefined , symbol , BigInt

const score = 100;
const scorevalue = 100.3;
const isLoggedIn = false ;
const outsideTemp = null;
let userEmail;//undefined 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 3456686069585093898989999893n;

// JavaScript is dynamically typed Language 

// Reference type (non-primitive)
// arrays , objects , functions 
const heros = ["shaktiman", "nagraj" , "doga"]
let myObj ={
    name :"hitesh",
    age :22,
}
const myfunction = function(){
console.log("helloworld");
}
console.log(typeof bigNumber);