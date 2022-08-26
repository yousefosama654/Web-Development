// this how u make an object
let obj = {
  // this is prperties
  name: "yousef",
  age: 20,
  // this is methods
  isworking: function () {
    return age > 18;
  },
};
// console.log(window.obj.isworking());

//built in global objects window _--_screen _--_ document
// global because log ==console.log
// console && document are nested objects of window

let arr = [1, 2];
//arr.length is not a method but property
arr.push("yousef", "osama", "mohamed");
arr.pop();
arr.unshift("hello world");
arr.unshift("the second");
arr.shift();
// no error beacuse of dynamic language
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// searcing in the Array  Methods
// 1-indexof() --- >>> searches from the beginning
// 2-lastindexof() --- >>> searches from the last
// 3-includes() --- >>> searches and returns true or false
// 4-reverse() --->>> reversing the array
// 5-shift() --->>> removes the first element
// 6-pop()  --->>> removes the last element
// 7-push() --->>> adds to the end of the array
// 8-unshift() --->>> adds to the first of the array
//9-sort() --->>>sort always in alphapetic order
//properties
// 1-length
//hints
//1-we can make array of different data types beacuse  it is dynamic langauge don't determine the data type just "let"
arr.indexOf(20);
console.log(arr.lastIndexOf(2));
let bool = arr.includes("osmaa");
console.log(bool);
console.log(arr);
console.log(arr.reverse());
// JSON-->>javascript object notation
// javascript is high level language which collect the garbage automatically

/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/* high level language     low level language

  friendly                 machine language   
  needes translator        no translator recquired but assembler
  lower in speed           high speed
  well structured          not well structured
  easy to debug            hard to debug
*/
/*
Statically typed languages
A language is statically (strong) typed if the type of a variable is known at compile time.

Dynamically typed languages
A language is dynamically typed if the type is associated with run-time values. 
*/
/*
primitive values                  ||    references                         
srting                            ||    mainly is the object
number                            ||    let player --->>>in stack(ref)
bool                              ||    { name:"yousef" --->>>in haep(data)
undefined                         ||    }
value copied in the assignment =  ||    the copy is by reference
*/
//" mark-and-sweap algorithm" deletes any unreachable
//"Every entity in Javascript is an object"
// shift + alt + f -->>formatting
// ********************************************************
//DOM -->> document object model
