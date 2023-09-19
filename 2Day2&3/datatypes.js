/* Datatypes 
primitive -> String number boolean null Symbol
Object
Array
Undefined
NaN --> is a condition that define not a number format occurs when expected type is diff
*/

let a = "Hello";
let b =2;
let c = true;
let d = null;
let e = {name : 'hello',
        rollno : 1};

//symbol is used to generate unique key
// let sym = new Symbol();
// let f = {
//     [sym] : 'hello'
// };

let s =  Symbol("This is symbol");
let s1 =  Symbol("This is symbol");
console.log(s);
console.log(s1);
console.log(s === s1);



// 
let g = []; 
console.log(typeof(d));
console.log(typeof(g));


// since we can use . to access functions of datatypes like number num.toFixed(2) 
// and strings str.toUpperCase() 
// internally JS treat all datatypes as object ie instance of class of that datatype 
   