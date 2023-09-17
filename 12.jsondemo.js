const data= require('./files/data.json');

console.log(data);

for(let obj of data){
    console.log(`name:${obj.name} Email:${obj.email}`)
}


const fs = require("fs");

fs.readFile("./files/data.json", function(err, data) {
    if (err) throw err;
    const jsondata = JSON.parse(data);
    console.log(jsondata); 
    for(let obj of jsondata){
        console.log(`name:${obj.name} Email:${obj.email}`)
    }
});