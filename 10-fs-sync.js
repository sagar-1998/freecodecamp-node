const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt' , 'utf-8')

// the flag is used to not overwrite the content of the file but to append after the existing content 
// there are more one value of flag out there other than just 'a'

writeFileSync(
    './content/result-sync.txt',
    `This is the result: ${first} ${second}`,
    {flag: 'a'}
)
    
console.log("done with the task ")
console.log("starting the new one  ")
    // console.log(first, second) 
