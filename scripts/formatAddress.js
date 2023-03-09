//now that you have the csv converted to json in original-files update the file name on line 2 to match
//ensure file name has no spaces
const wl = require("./original-files/wl1.json");

let newFileName = "jsonWL1"; //what you want to call the file dont worry about extension
let strArr = [];

//creating an array of strings instead of objects
for (const address of wl) {
  strArr.push(Object.values(address)[0]);
}

//this will write the new file to the files folder
//this will also be the file that you will need to add to user.js
require("fs").writeFileSync(
  `./files/${newFileName}.json`,
  JSON.stringify(strArr, null, 2)
);
