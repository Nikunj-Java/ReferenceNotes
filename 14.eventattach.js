const EventEmitter= require('events');
const emitter = new EventEmitter();

// declare the event handler
function connectionHandler() {
    console.log(`connection successfull`);
    emitter.emit('fetchdata')
}
function fetchHandler() {
    console.log(`Data Fetched Successfully`);
    emitter.emit('display')
}
function displayHandler(){
    console.log(`Data Displayed successfully`);
}
emitter.on('connection',connectionHandler);
emitter.on('fetchdata',fetchHandler);
emitter.on('display',displayHandler);
emitter.emit('connection');//fire event

//off method is used detach handler
emitter.off('connection',connectionHandler);
emitter.emit('connection');//fire event


