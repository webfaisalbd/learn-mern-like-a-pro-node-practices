const stream = require('node:stream');
const fs = require('node:fs');

const fileStream = fs.createWriteStream('./streams/out.txt');
fileStream.write('Hello my world');
fileStream.end();