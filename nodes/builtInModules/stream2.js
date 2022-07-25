const {stdin, stdout} = require('process');
const fs = require('fs');

const writableStream = fs.createWriteStream("./streams/output.txt");

stdin.pipe(writableStream);
