var url = require('url');
var adr = 'http://tatadigital.com:8000/profile.htm?name=tatadigital&year=2000';
var myUrl = url.parse(adr, true);

console.log(myUrl.host); //returns 'tatadigital.com:8080'
console.log(myUrl.hostname);
console.log(myUrl.protocol);
console.log(myUrl.port);
console.log(myUrl.pathname); //returns '/profile.htm'
console.log(myUrl.search); //returns '?name=tatadigital&year=2000'

var qdata = myUrl.query; //returns an object:{ name: 'tatadigital', year: '2000' }
console.log(qdata); //print returned object
console.log(qdata.name)