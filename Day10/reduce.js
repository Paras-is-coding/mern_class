let a = [4,5,6,6,2,3];

let sum = a.reduce((acc,curr)=>{
    console.log(acc , curr)
    return acc + curr;
});


// in case you want to give  initial acc value

// let sum = 0;

// sum = a.reduce((acc,curr)=>{
//     console.log(acc, curr)
//     return acc + curr;
// },sum)

console.log(sum);