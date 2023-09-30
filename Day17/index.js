const fs = require("fs"); // es5 import
// import fs from "fs";            // es6 import

// fs is package used to handle files in server
let users = [
  {
    id: 1,
    name: "paras",
    role: "admin",
  },
  {
    id: 2,
    name: "davud",
    role: "user",
  },
];

let jsonStr = JSON.stringify(users);
let file = "./user.json";

fs.writeFile(file, jsonStr, (err) => {
  if (err) {
    console.log("Error in filewrite", err);
  } else {
    console.log("File write successful");
  }
});

// internal working of writeFile function above

// fs.open(file,"w",(err,fd)=>{
//     if(err){
//         console.log("Error opening",err)
//     }
//     else{
//         fs.write(fd,jsonStr,(err1,bytes)=>{
//             if(err1){
//                 console.log("Error writing",err1)
//             }
//             else{
//                 console.log(bytes+"bytes written in file")
//             }
//         })
//     }
//     fs.close(fd);
// })

// fs.readFile(file,{encoding: "utf-8"},(err,data)=>{
// if(err){
//     console.log("Error reading ",err);
// }else{
//     data = JSON.parse(data);
//     console.log(data)
// }
// })

let user1 = [
  {
    id: 3,
    name: "mark",
    role: "user",
  },
];

// fs.readFile(file, { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("Error reading ", err);
//   } else {
//     data = JSON.parse(data);
//     newData = [...data, ...user1];

//     fs.writeFile(file, JSON.stringify(newData), (err) => {
//       if (err) {
//         console.log("Error in filewrite", err);
//       } else {
//         console.log("File write successful");
//       }
//     });
//   }
// });

//OR 

let data = fs.readFileSync(file,{encoding:'utf-8'});
data = JSON.parse(data);
let newData = [...data,...user1];
fs.writeFileSync(file,JSON.stringify(newData));



// let path = "./uploads/images/users"

// if(!fs.existsSync(path)){
//     fs.mkdirSync(path,{recursive:true})
// }

// fs.unlinkSync(file);
