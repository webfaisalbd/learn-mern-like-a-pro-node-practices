const fs = require('fs');
const log = console.log;

const fileName = './streams/resume.pdf';
const readableStream = fs.createReadStream(fileName, { highWaterMark: 1024 });

let i = 0;

readableStream.on('data', (chunk) => {
    log(++i, '\t', chunk.length);

});

readableStream.on("end", () => {
    log('end');
});

