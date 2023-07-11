const fs = require ("fs");
const users = require("./usernew");
let user = {
	name: "saps1",
	age: 25,
	language: ["Node", "React", "Graphq1"]
};
let user1 = {
	name: "saps2",
	age: 35,
	lauguage: ["MSA", "Graphq1"]
};
users.unshift(user);
users.push(user1)
fs.writeFile("usernew.json", JSON.stringify(users), err => {
if (err) throw err;
console.log("Done writing");
});