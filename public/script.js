let socket=io()

function setup(){
    createCanvas(window.innerWidth-60,window.innerHeight-30)
    background(250)
}

function mouseDragged(){
    noStroke()
    fill(191, 255, 0)
    ellipse(mouseX,mouseY,16,16)
    
    socket.emit('mouseDragged',{
        x:mouseX,
        y:mouseY
    })
}

socket.on('mouseDragged',(data)=>{
    noStroke()
    fill(0, 128, 255)
    ellipse(data.x,data.y,16,16)
    
})