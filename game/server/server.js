import http from 'http'
import {getData, close} from './database.js'

const PORT = 3000

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS') 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type') 

    if (req.method == 'OPTIONS') {
        res.writeHead(204)
        res.end()
        return
    }
    
    if (req.method !== 'GET' || (req.url !== '/games' && req.url !== '/news' )) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Not Found')
        return
    }

    const sendResponse = ( responseData ) => {
        res.writeHead(200, {'Content-Type': 'applications/json'})
        res.end(JSON.stringify( responseData ))
    }
    getData( sendResponse, req.url.slice(1) )
})

server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost/:${PORT}`)
})

process.on('SIGINT', () => {
    console.log('Остановка сервера...')
    close( () => process.exit(0))
})