const http = require('http');

//req is incoming request. res is what we sending back
// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.write('Welcome to our home page')
//     res.end()
// })

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is about pg')
    }
    res.end(`<h1>Oops! Page Not Found</h1>`)

})

server.listen(5000)