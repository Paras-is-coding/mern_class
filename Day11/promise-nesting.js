let conn = () => {
  return new Promise((res, rej) => {
    console.log("i'm connection");
    res("connection successful!");
  });
};
let insert = () => {
  return new Promise((res, rej) => {
    console.log("i'm insertion");
    let conn = true;
    if (conn) {
      res("insertion successful!");
    }
  });
};
let list = () => {
  return new Promise((res, rej) => {
    console.log("i'm listing");
    let ins = true;
    if (ins) {
      res("listing successful!");
    }
  });
};

conn().then((val) => {
  console.log(val);
  insert().then((val1) => {
    console.log(val1);
    list().then((val2) => {
      console.log(val2);
    });
  });
});



// chaining 
conn().then((val) => {
    console.log(val);
    return insert()
      })
      .then((val1)=>{
        console.log(val1)
        return list()
      })
      .then((val2)=>{
        console.log(val2)
      })
      .catch((err)=>{               // yo ma yeuta catch le kaam garew
        console.log(err)
      })


// let loading = true;
//       login()
//       .then((res)=>{
//         //code
//       })
//       .catch((err)=>{
//         //code   
//       })
//       .finally(()=>{
//         loading = false;
//       })