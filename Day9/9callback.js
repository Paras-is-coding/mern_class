setTimeout(() => {
    console.log("I'm set time out");
}, 3000);


let func1 = (cb)=>{
    setTimeout(() => {
        console.log("i'm inside function1");
        cb();
    }, 2000);
}

let func2 = ()=>{
    setTimeout(() => {
        console.log("i'm inside function2");

    }, 1000);
}

func1(func2);
// func2();


