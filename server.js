const http = require('http')
const fs = require('fs')

// create the server
const server = http.createServer((req, res) => {
    console.log("Request Made")
    // res.setHeader("Content-Type", "text/plain")
    res.setHeader("Content-Type", "text/html")

    const viewRoute = './views/'

    // switch (req.url) {
    //     case '/':
    //         res.writeHead(200)
    //         res.write('Homepage')
    //         res.end()
    //         break;
    //     case '/about':
    //         res.writeHead(200)
    //         res.write('About Us')
    //         res.end()
    //         break;
    //     default:
    //         res.writeHead(404)
    //         res.write('404 page')
    //         res.end()
    // }



    switch (req.url) {
        case '/':
            fs.readFile(`${viewRoute}index.html`, (err, data) => {
                if (err) {
                    res.writeHead(200)
                    res.write(`<h1>Error displaying page ${err.message}</h1>`)
                    res.end()
                }
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;
        case '/about':
            fs.readFile(`${viewRoute}aboutUs.html`, (err, data) => {
                if (err) {
                    res.writeHead(200)
                    res.write(`<h1>Error displaying page ${err.message}</h1>`)
                    res.end()
                }
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;

        case '/contact':
            fs.readFile(`${viewRoute}contactUs.html`, (err, data) => {
                if (err) {
                    res.writeHead(200)
                    res.write(`<h1>Error displaying page ${err.message}</h1>`)
                    res.end()
                }
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;

        case '/terms':
            fs.readFile(`${viewRoute}terms.html`, (err, data) => {
                if (err) {
                    res.writeHead(200)
                    res.write(`<h1>Error displaying page ${err.message}</h1>`)
                    res.end()
                }
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;

        default:
            res.writeHead(404)
            res.write('<h1>404 page</h1>')
            res.end()
    }
})

// listen for requests 
server.listen(3000, 'localhost', () => {
    console.log('Listening on PORT 3000')
})

