var hr , min, sc;
var hrAngle,minAngle,scAngle

function setup() {

  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate (-90)

  min = minute();
  hr = hour();
  sc = second();

  scAngle = map(sc,0,60,360);
  minAngle = map(min,0,60,360);
  hrAngle = map(hr,12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke (255,0,0);
  strokeWeight(7);
  line (0,0,100,0);
  pop ();

  push();
  rotate(minAngle);
  stroke (0,255,0);
  strokeWeight(7);
  line (0,0,75,0);
  pop ();

  push();
  rotate(hrAngle);
  stroke (0,255,0);
  strokeWeight(7);
  line (0,0,50,0);
  pop ();

  stroke(255,0,255)
  point (0,0)
  strokeWeight(10);
  noFill();

  stroke (255,0,0);
  arc (0,0,300,300,0,scAngle);

  
  stroke (0,255,0);
  arc (0,0,280,280,0,scAngle);

  stroke (0,255,0);
  arc (0,0,260,260,0,scAngle);












  drawSprites();
}