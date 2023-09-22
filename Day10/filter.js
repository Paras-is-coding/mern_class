// filter 

let users = [
    {
        name   : "nabi",
        email: "n@n.com",
        address: "kathmandu",
        language: "mern"
    },
    {
        name   : "bob",
        email: "b@n.com",
        address: "lalitpur",
        language: "react"
    },
    {
        name   : "kim",
        email: "k@n.com",
        address: "bhaktpur",
        language: "js"
    },
    {
        name   : "susi",
        email: "s@n.com",
        address: "kathmandu",
        language: "js"
    },
    {
        name   : "piru",
        email: "p@n.com",
        address: "lalitpur",
        language: "react"
    },
    {
        name   : "binu",
        email: "b@n.com",
        address: "bhaktpur",
        language: "php"
    },
    {
        name   : "duk",
        email: "d@n.com",
        address: "bhaktpur",
        language: "mern"
    },
    {
        name   : "lister",
        email: "l@n.com",
        address: "kathmandu",
        language: "php"
    },
    {
        name   : "hirit",
        email: "h@n.com",
        address: "lalitpur",
        language: "mern"
    },
    {
        name   : "nimu",
        email: "n@n.com",
        address: "bhaktpur",
        language: "mern"
    },
]


let kathmanduUsers = 
users.filter((value,index)=>{
    if(value.address === 'kathmandu'){
        return value;
    }
});
console.log(kathmanduUsers)