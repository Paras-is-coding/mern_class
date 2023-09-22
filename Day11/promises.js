// promises 
// promises are ways to execute asynchronous js

const myPromise = new Promise((resolve, reject)=>{
    console.log("i'm inside promise")
    reject("i'm reject of promise")
})

myPromise.then((res)=>{
    // console.log(res)
})
.catch((err)=>{
    console.log(err)
})

console.log("i'm after promise")








// const promiFunc= ()=>{
// return new Promise((resolve, reject)=>{
//     console.log("i'm inside promise")
//     reject("i'm reject of promise")
// })

// }

// promiFunc().then((res)=>{
//     // console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// console.log("i'm after promise")