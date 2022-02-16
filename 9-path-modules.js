const path = require('path')

console.log(path.sep) //returns path seperator as '\'

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) // \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base) //returns the last file in the path as test.txt

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute) // C:\wamp64\www\nodeTutorials\tutorial1\content\subfolder\test.txt