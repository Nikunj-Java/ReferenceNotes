const EventEmitter= require('events');
//create Event Emitter Object
const emitter = new EventEmitter();
//emit simple event
emitter.on('hello', () => {
    console.log(`A hello event occurred.`);
});

//event with callback args
emitter.on('connect',(data)=>{
    console.log("Connected");
    console.log(`data Received ${data.name}`)
})

emitter.emit('hello');//fire event
emitter.emit('connect',{name:"sonam"})