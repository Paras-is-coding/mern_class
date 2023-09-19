// closure 
// callback 
// recursive 
// async-await


//closure
let func1 = () =>{
    console.log("I'm inside function 1");
    let func2 = ()=>{
        console.log("I'm inside function 2");
    }
    return func2;  // way to call closure function outside function 1 -- returning function scope
}

let response = func1();
response(); // func2() call 