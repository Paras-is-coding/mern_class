// let a = [
//     {name:"paras",age:23},
//     4,"hello"
// ];

// console.log(a[0].name);

 
let cities = ['KTM' , 'MNR' , 'PKR'];

console.log(cities);

cities.push('DEL');
cities.shift();
cities.unshift('DHN');

console.log(cities);


let a = {
    name:"hello",
    age:22
}
let b = "hello"
console.log(Array.from(b))

cities[cities.length] = a;
console.log(cities)

cities[8] = "London";
console.log(cities)

for(values of cities){
    console.log(values?values:null);
}

console.log(cities.slice(1,3)) // returns value at index 1 and 2 , doesnt change array
console.log(cities)
console.log(cities.splice(1,3))// 1 index to 3length and changes array
console.log(cities)

let allowed = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp']  
//filename => name.ext 

let filenName = 'abc.jpg';
// let arr = filenName.split('.'); //['abc','ext']
// let ext = arr.pop();
let ext = (filenName.split('.')).pop();

console.log(allowed.includes(ext.toLowerCase()));

console.log(cities)
console.log(cities.join(","))

let products = [];

products.unshift({name :"shoes" ,
    price :2000 ,
    discount : 20})
products.push({name :"shirt" ,
    price :1500 ,
    discount : 10})
products.push({name :"pants" ,
    price :2500 ,
    discount : 25})
products.push({name :"bag" ,
    price :1800 ,
    discount : 5})
products.push({name :"laptop" ,
    price :100000 ,
    discount : 15})

// let discount1 = (products[0].discount /100)*products[0].price;
// let discount2 = (products[1].discount /100)*products[1].price;
// let discount3 = (products[2].discount /100)*products[2].price;
// let discount4 = (products[3].discount /100)*products[3].price;
// let discount5 = (products[4].discount /100)*products[4].price;

// let sp1 = products[0].price - discount1;
// let sp2 = products[1].price - discount2;
// let sp3 = products[2].price - discount3;
// let sp4 = products[3].price - discount4;
// let sp5 = products[4].price - discount5;

// products[0].disAmt = discount1;
// products[0].AfterDis = sp1;

// products[1].disAmt = discount2;
// products[1].AfterDis = sp2;

// products[2].disAmt = discount3;
// products[2].AfterDis = sp3;

// products[3].disAmt = discount4;
// products[3].AfterDis = sp4;


// products[4].disAmt = discount5;
// products[4].AfterDis = sp5;

// console.log(products.join(","))



// console.log('Product:'+products[0].name+', Price:'+products[0].price+', Discount:'+products[0].discount+', DisAmt:'+products[0].disAmt+', AfterDis:'+products[0].AfterDis)
// console.log('Product:'+products[1].name+', Price:'+products[1].price+', Discount:'+products[1].discount+', DisAmt:'+products[1].disAmt+', AfterDis:'+products[1].AfterDis)
// console.log('Product:'+products[2].name+', Price:'+products[2].price+', Discount:'+products[2].discount+', DisAmt:'+products[2].disAmt+', AfterDis:'+products[2].AfterDis)
// console.log('Product:'+products[3].name+', Price:'+products[3].price+', Discount:'+products[3].discount+', DisAmt:'+products[3].disAmt+', AfterDis:'+products[3].AfterDis)
// console.log('Product:'+products[4].name+', Price:'+products[4].price+', Discount:'+products[4].discount+', DisAmt:'+products[4].disAmt+', AfterDis:'+products[4].AfterDis)



for (values of products){
        values.disAmt= (values.discount /100)*values.price;
        values.afterDis= values.price - values.disAmt;
        console.log('Product:'+values.name+', Price:'+values.price+', Discount:'+values.discount+', DisAmt:'+values.disAmt+', AfterDis:'+values.afterDis);
}

