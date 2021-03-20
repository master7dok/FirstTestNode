const hhtp = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 3000
const server = hhtp.createServer ((req, res) => {

    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,data) => {
    //         if (err){
    //             throw err
    //         }
    //     res.writeHead(200, {
    //         'Content-Type': 'text/html'
    //     })
    //     res.end(data)
    //     })
    // } else if (req.url === '/contact'){
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err,data) => {
    //         if (err){
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // }
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let ContentType = 'text/html'
    switch (ext){
        case '.css':
            ContentType = 'text/css'
            break
        case '.js':
            ContentType = 'text/javascript'
            break
        default:
            ContentType = 'text/html'
    }
    if (!ext){
        filePath += '.html'
    }
    console.log(filePath)
    fs.readFile(filePath, (err, content) =>{
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) =>{
                if (err){
                    res.writeHead(500)
                    res.end('error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': ContentType
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': ContentType
            })
            res.end(content)
        }
    })
})

server.listen(port, () => {
    console.log(`Server has been started on ${port}`)
})