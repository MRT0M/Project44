var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textAlign(CENTER);
  textSize(24);
  fill('lightblue');
  text("SCORE: " + score, 500, 30);

  if(score === 3){
    clear();
    background(bg2)
    fill(255,215,0);
    textSize(40);
    text("TREASURE UNLOCKED!", 250, 200);
  }


  drawSprites();
}