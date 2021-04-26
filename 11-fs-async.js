const { readFile , writeFile } = require('fs')

//  we know that if something is async then we got the callback function to run after the async task get completed
// we should also mention the encoding method since the result will return buffer not actual value or content 
// the encoding is the second parameter in this method 
console.log('start');

readFile('./content/first.txt' , 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
    writeFile(
        './content/result-sync.txt', 
        `Here is the result: ${first} ${second}`, 
        (err, result ) => {
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task ')
        })
    //

    } )
})

console.log("starting reading the next file ")