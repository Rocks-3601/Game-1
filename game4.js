function setup(){
     createCanvas(400, 400);
     // vars
     let xspeed = 2;
     let yspeed = 3;
     let x = 200;
     let y = 200;
     let size = 50
}

function draw(){
     background(12, 50, 200);
     fill(255, 125, 0);
     noStroke();
     ellipse(x, y, size);
     x = x + xspeed;
     y = y + yspeed;
     if (x >= 400 - size){
          x = x - xspeed;
     }else if (x <= 0 + size){
          x = x + xspeed;
     }

     if (y >= 400 - size){
          y = y - yspeed;
     }else if (x <= 0 + size){
          y = y + ypeed;
     }
     
     if (mouseClicked()){
          xspeed = random(1, 5);
          yspeed = random(1, 5);
     }
     console.log(x + ' , ' + y)
}
