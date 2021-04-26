const path = require('path')

console.log(path.sep)

const filePath = path.join('/content//', 'subfolder', 'text.txt')

console.log(filePath)

// to get the name of what come at the end of the filePath then we use 

const base = path.basename(filePath)
console.log(base);
// we can get any value from the path we have given for that there are another methods we just need to explore those

// this will give the complete path like from the disk to the file path
// since our node app will run in different computers we will have to include the path like this 

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');

console.log(absolute)

