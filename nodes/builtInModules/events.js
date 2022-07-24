const EventEmitter = require('node:events');
const log = console.log;

// log(EventEmitter);

const eventEmitter = new EventEmitter();

eventEmitter.on("even", (t) => {
    log("EVEN is : ", t, new Date().toLocaleString());
})

eventEmitter.on("odd", (t) => {
    log("ODD is : ", t, new Date().toLocaleString());
})

setInterval(() => {
    const t = new Date().getTime();
    t % 2 == 0 ?
        eventEmitter.emit("even", t) : eventEmitter.emit("odd", t);
}, 1751)