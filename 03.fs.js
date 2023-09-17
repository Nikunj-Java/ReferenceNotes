var fs = require('fs');

// try {
//     const data=fs.readFileSync("data/file1.txt");
//     console.log(data.toString())
// } catch (error) {
//     console.log("Error Occured",error)
// }

// try {
//     fs.writeFileSync("data/file1.txt", "this is my Message");
//     console.log("Data Written successfully")
// } catch (error) {
//     console.log("Error Occured",error)
// }
try {
    fs.appendFileSync("data/file1.txt"," New Message")
    console.log("Data Updated successfully")
} catch (error) {
    console.log("Error Occured",error)
}

try {
    fs.unlinkSync("data/file1.txt")
    console.log("File Deleted successfully")
} catch (error) {
    console.log("Error Occured",error)
}

