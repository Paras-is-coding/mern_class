let prom1 = Promise.resolve("I'm promise 1")
let prom2 = Promise.resolve("I'm promise 2")
let prom3 = Promise.reject("I'm rejected promise 3")
let prom4 = Promise.resolve("I'm promise 4")



// Promise.all([prom1,prom2,prom3,prom4])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

Promise.allSettled([prom1,prom2,prom3,prom4])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})