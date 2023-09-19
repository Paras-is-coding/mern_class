//Arithmetic op  --->     + - * / % **
//Inc dec        --->     ++ -- 
//Assignment     --->     += -= = *= /= %= 
// concat op     --->     +  ,
// Compa ope     --->    < > <= >= === == != !==

//logical op    --->    && || !

// conditional or ternary 
// (condition)?logicfortrue:logicforfalse;


let x = 10;
let y = "10";

console.log(x==y);
console.log(x===y);

let z = 4;
console.log(x<=z);
console.log(x>=z);
console.log(x!=z);
console.log(x!==z);

console.log(z<=y);
console.log(z>=y);
console.log(z>y);





let product = {
    name: "product",
    price: 200,
    discount: 23
}
// if(product.discount && product.discount>0){
// //logic for discount
// }

//or 
let discount = (product.discount && product.discount>0)?product.discount:0;


// if(!Array.include()){
//     //logic
// }


// 

let student = {
    name: "bob",
    marks: 44,
    // percentage:58
}

//null polishing operator -- short hand of ternary operator
let name = student.name ?? null;
let marks = student.marks ?? null;
let percentage = student.percentage ?? 0;

console.log(name);
console.log(marks);
console.log(percentage);



//spread or rest operator 
// ...

// spread can be done in either object or array
let student2 = {
    ...student,
    address:"pakistan",
    marks:100,
    english: 20,
    math:69
}
console.log(student2)



// object destructuring and here ...other is rest ope
let {name:fullname,marks:fullmarks,address,...other} = student2;
console.log(fullname + fullmarks + address);
console.log(other);

      
// std1?.name - returns value of std1.name if exist otherwise returns undefined