const helloWorld = async() =>{

    // return "hello" //async func returns promise and returns resolve

    // throw "Error"  // incase you want to return reject we use throw
}

// helloWorld()
// .then()
// .catch()


const handleHelloWorld = async ()=>{
    try{
        let resolve = await helloWorld()
    }
    catch(exception){
        //catch
    }
}