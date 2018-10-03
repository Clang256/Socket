//holds socket-
var socket;

function setup() {
  createCanvas(300, 300);
  background(0, 0, 0);
    
    //look for sockets opening on channel 
  socket = io.connect('http://localhost:3000');
  // handles messages coming from servere
  socket.on('mouse', newDrawing);
}
//event handler for when message comes in
function newDrawing(data){

  noStroke();
 
    if(data.x < 10){
        textSize(16);
text('left', 0, 150);
        fill(50, 255, 255);
    }
   if(data.x > 280){
        textSize(16);
text('right', 235, 150);
        fill(50, 255, 255);
      
    }
    
    if(data.y < 20){
        textSize(16);
text('up', 140, 32);
        fill(50, 255, 255);
      
    }
    
if(data.y > 280){
        textSize(16);
text('down', 110, 290);
        fill(50, 255, 255);
      
    }
    
    
}

function mouseDragged(){
  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data ={ 
    x: mouseX,
    y: mouseY
  }

// the message - name, and what the message data is
  socket.emit('mouse', data);
 
       if(mouseX < 10){
        textSize(32);
text('left', 0, 150);
        fill(255, 255, 255);
    }
   if(mouseX > 280){
        textSize(32);
text('right', 235, 150);
        fill(255, 255, 255);
      
    }
    
    if(mouseY < 20){
        textSize(32);
text('up', 140, 32);
        fill(255, 255, 255);
      
    }
    
if(mouseY > 280){
        textSize(32);
text('down', 110, 290);
        fill(255, 255, 255);
      
    }
    

    
}


function draw() {
  
 
}
