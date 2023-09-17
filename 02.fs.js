var fs = require('fs');

// fs.open("data/file1.txt", 'r', function (err, fp) {
//     if (err)
//         throw err;
//     else
//         console.log(fp) //file pointer
// })
// fs.open("data/file1.txt", 'w', function (err, fp) {
//     if (err)
//         throw err;
//     else
//         console.log(fp) //file pointer
// })
//read data
fs.readFile('data/file1.txt',function(err,data){
    if(err)
        throw err;
    else
        console.log(data.toString())
});

// fs.writeFile('data/file1.txt',"My New Data",(err)=>{
//     if(err){
//         console.log("Error ",err)
//     }
//     console.log("File Saved..!!!")
// })

// fs.appendFile('data/file1.txt',"My New Data",(err)=>{
//     if(err){
//         console.log("Error ",err)
//     }
//     console.log("File Updated..!!!")
// })

fs.unlink("data/file1.txt",(err)=>{
    if(err){
        console.log("Error while deleting file ",err)
    }
    console.log("File deleted Successfully..!!")
})
