const os = require('os');

const name=os.type();
const architecture= os.arch();
const platform=os.platform();
const release= os.release();
const version= os.version();

console.log("Name: "+name);
console.log("Architecture: "+architecture);
console.log("Platform: "+platform);
console.log("Release: "+release);
console.log("Version: "+version);

//cpus() To get the information of the CPU,
const { model, speed } = os.cpus()[0];

console.log(`Model: ${model}`);
console.log(`Speed (MHz): ${speed}`);

//Host name
const hostname= os.hostname();
console.log(`Host Name ${hostname}`)
//netwrok interfaces (Retrieving network interface information)
console.log(os.networkInterfaces());

//temp dir()
console.log(`Temporary Directory ${os.tmpdir()}`)
//Getting the server hardware information
let totalMem = os.totalmem();
console.log(totalMem);
let freeMem = os.freemem();
console.log(((freeMem/1024)/1024)/1024);//in GB

//User Info
console.log(os.userInfo());
//Server Uptime
console.log(`The server has been up for ${os.uptime()} seconds.`);