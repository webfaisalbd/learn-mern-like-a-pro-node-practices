const fs = require('fs');

// file path copy for read 
const fileName = './streams/cv.pdf';
const readableStream = fs.createReadStream(fileName, { highWaterMark: 1024 });
const writableStream = fs.createWriteStream('./streams/cv2.pdf');
readableStream.pipe(writableStream);

// final code end


// but if see readable stream , then
readableStream.on("data",(chunk)=> {
    console.log(chunk.length);
})

readableStream.on("end", ()=> {
    console.log("stream end now");
});

