// HTTP 
const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url === '/about'){
        res.end('Here is out short history');    
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find your page</p>
        <a href="/">Back home</a>
    `)
})

server.listen(5000)

// the above code is use to locally create the server in the machine

  