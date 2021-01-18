var wall,thickness;
var  bullet,speed,weight;

function setup() {
  createCanvas(1300,400);
  thickness=createSprite(50, 200, 50, 20);

  wall=createSprite(1200,200,thickness,height/2);

  thickness=Random(22,83);
speed=Random(223,321);
height=Random(30,52);
}
function draw() {
  background("black");
  if(hasColided(lbullet,lwall))
  {
    bullet.velocityX=0;
    var damage=0.5* weight* speed* speed/(thickness *thickness *thickness);
    
      if(damage>10)
    {
            wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10)
    {
            wall.shapecolor=color(0,255,0);
    }
  }

  drawSprites();
}