const addPadding = (numb)=>{
    if(numb<10){
        return "0"+numb;
    }
    else{
        return numb;
    }
}

const getClock = ()=>{
    let date = new Date();
    let h = addPadding(date.getHours())
    let m = addPadding(date.getMinutes())
    let s = addPadding(date.getSeconds())

    document.getElementById("clock").innerHTML = h + ": " + m + ": "+ s;
    
}

setInterval(getClock, 1000);