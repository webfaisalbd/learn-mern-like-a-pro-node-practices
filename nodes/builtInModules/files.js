const fs = require('node:fs');
const log = console.log;

// log(fs);

// fs.writeFileSync("file1.txt", "Hello World!");
// log('writing done');


// run it in terminal 
// ls
// output :  cpus.js  events.js  file1.txt  files.js 

// run it again in terminal
// cat file1.txt 
// output : Hello World! 


// fs.writeFile("file2.txt","Hello Mern developers",()=> {
//     log("inside of callback")
// });
// log("writing file done")


fs.appendFile("file2.txt", `\n ${new Date().toLocaleString()}`, ()=> {
    log("writing finished");
});
log("writing started");