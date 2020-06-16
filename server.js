const express=require('express')
const socketio=require('socket.io')
const http=require('http')

const app=express()
const server=http.createServer(app)
const io=socketio(server)

app.use('/',express.static(__dirname+'/public'))
const PORT=process.env.PORT

io.on('connection',(socket)=>{
    console.log(socket.id)
    socket.on('mouseDragged',(data)=>{
        socket.broadcast.emit('mouseDragged',data)
    })
})

server.listen(PORT,()=>{
    console.log(`server started at: http://localhost:${PORT}`)
})