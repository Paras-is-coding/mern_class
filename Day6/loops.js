// for 
// while 
//do while 
// for in 
// for of 
// looping through arrays 
  // arr.forEach()
  // arr.map()
  //arr.filter()
  //arr.reduce()

let arr = [1,4,4,5,6,7,7,7,5,5,43543534,45,345,3];
//.....................................................................do while
// let i = 0;
// do{
//     console.log(arr[i]);
//     i++;
// }while(i<arr.length);



//.....................................................................for
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


//.....................................................................while

// let i = 0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }

      


//.....................................................................for of
// for(values of arr){
//     console.log(values);
// }


//.....................................................................for in 
// for(keys in arr){
//     console.log(arr[keys]);
// }



//.....................................................................map 

// let arr1 = arr.map((value,index,arr)=>{
//     return value*2;
// })
// console.log(arr.sort())



// home task

for(let i=1; i<=5; i++){
  let string = '';
  for(let j=1; j<=i; j++){
    string += '* ';
  }
  console.log(string);
}

for(let i=1; i<=5; i++){
  let string = '';
  for(let j=1; j<=6-i; j++){
    string += '* ';
  }
  console.log(string);
}



for(let i=1; i<=5; i++){
  let string = '';
  for(let j=1; j<=5; j++){
    if(j===1 || j===5 || i===1 || i===5){
      string += '* '
    }
    else{
      string += '  ';
    }
     
  }
  console.log(string);
}


for(let i=1; i<=10; i++){
  let string = '';
  for(let j=1; j<=5; j++){
    if(i<=5){
      if(j===1 || j===5 || i===1 || i===5){
        string += '* '
      }
      else{
        string += '  ';
      }
    }
    else{
      if(j===1){
        string += '* ';
      }
    }  
    
  }
  console.log(string);
}
