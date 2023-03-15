const Netcat = require('node-netcat')

options = {
    timeout: 60000,
    read_encoding: 'buffer'
}

server = new Netcat.server(8001, '127.0.0.1', options)

server.listen()

server.close()
