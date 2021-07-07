function setup(){
     createCanvas(400, 400);
}
// vars
let xspeed = 2;
let yspeed = 3;
let x = 200;
let y = 200;
let size = 50

function draw(){
     background(12, 50, 200);
     fill(255, 125, 0);
     noStroke();
     ellipse(x, y, size);
     x = x + xspeed;
     y = y - yspeed;
     if (x >= 400 - (size/2)){
          xspeed = xspeed - (xspeed*2);
     }else if (x <= 0 + (size/2)){
          xspeed = xspeed + (xspeed*2);
     }

     if (y >= 400 - (size/2)){
          yspeed = yspeed - (yspeed*2);
     }else if (y <= 0 + (size/2)){
          yspeed = yspeed + (yspeed*2);
     }
     
     function mouseClicked(){
          xspeed = random(1, 5);
          yspeed = random(1, 5);
     }
}
