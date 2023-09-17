//show set time out demo and show NodejS is By default async.

var fs = require('fs');
//sync way
// console.log("Starts")
// try {
//     fs.writeFileSync("data/file1.txt"," New Message")
//     console.log("Data Updated successfully")
// } catch (error) {
//     console.log("Error Occured",error)
// }
// console.log("Ends")

console.log("Starts")
fs.readFile('data/file1.txt',function(err,data){
    if(err)
        throw err;
    else
        console.log(data.toString())
});
console.log("Ends")