function setup(){
     createCanvas(400, 400);
     // vars
     var xspeed = 2;
     var yspeed = 3;
     var x = 200;
     var y = 200;
     var size = 50
}

function draw(){
     background(12, 50, 200);
     fill(255, 125, 0);
     noStroke();
     ellipse(x, y, 50);
     x = x + xspeed;
     y = y + yspeed;
     if (mouseClicked()){
          
     }
}
