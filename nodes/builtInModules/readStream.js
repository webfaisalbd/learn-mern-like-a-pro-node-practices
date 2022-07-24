const fs = require('fs');
const log = console.log;

const fileName = './streams/resume.pdf';
const readableStream = fs.createReadStream(fileName, { highWaterMark: 1024 });
const writableStream = fs.createWriteStream('./streams/resume2.pdf');

let i = 0;

readableStream.on('data', (chunk) => {
    log(++i, '\t', chunk.length);
    // write the readable chunk in writableStream
    writableStream.write(chunk);

});

readableStream.on("end", () => {
    log('end');
    writableStream.end();
});

