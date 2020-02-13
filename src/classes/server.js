const io = require('socket.io-client')
const Socket = io.connect('http://localhost:3333')

export default Socket
