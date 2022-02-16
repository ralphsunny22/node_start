//fs module, built-in

const { readFileSync, writeFileSync } = require('fs');

//reading files
const first = readFileSync('./content/first.txt','utf8'); //Hello this first text file
const second = readFileSync('./content/second.txt','utf8'); //This is Second text file
console.log(first, second)

//creating file. if not there, node will create a new one
//if the file is there, node will override all existing values in there
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`) //Here is the result : Hello this first text file, This is Second text file

//to append
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' }) //Here is the result : Hello this first text file, This is Second text fileHere is the result : Hello this first text file, This is Second text file
