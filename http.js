const hhtp = require('http')
const port = 3000
const server = hhtp.createServer ((req, res) => {
    res.end(`<h1>Hello nodeJS!!!</h1>`)
})

server.listen(port, () => {
    console.log('Server has been started')
})