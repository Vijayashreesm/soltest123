const fs = require("fs");

const usersnew = require("./DataD$"); 

let user1 = {
    fname: "Vijaya",
	lname: "Shree",
    age: 20,
    emp_id: 001
};
let user2 = {
    fname: "Lakshmi",
	lname: "Shree",
    age: 21,
    emp_id: 002
};
let user3 = {
    fname: "Surabhi",
	lname: "Chinnu",
    age: 22,
    emp_id: 003
};
let user4 = {
    fname: "Sanjana",
	lname: "Ammu",
    age: 23,
    emp_id: 004
};

let user5 = {
    fname: "Sudha",
	lname: "H S",
    age: 24,
    emp_id: 005
};
usersnew.unshift(user1);
usersnew.unshift(user2);
usersnew.unshift(user3);
usersnew.unshift(user4);
usersnew.push(user5);
fs.writeFile("DataD$.json", JSON.stringify(usersnew), err => {

    if (err) throw err;

 console.log("Done writing"); 
});