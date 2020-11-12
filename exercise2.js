let timer = 3;

function setup() {
  createCanvas(1280, 720);
  background(0);
  fill(47,47,47);
  rect(0,0, 1280, 60);
  textSize(32);
  fill("white");
  text("Tap anywhere on the screen to start", 400, 360);
  let game;
  frameCount = 60;

  //let timer = 3;
/*  game = '';
  if (game > 0) {
    start();
    console.log("positive");
  } else {
    startButton();
    console.log("negative");
  }
  but2 = createButton('test');
  but2.mouseClicked(console.log("cool")); */
}


function draw() {
  fill(47,47,47);
  noStroke();
  rect(1100, 0, 180, 50);
  frameRate(60);
  fill('white');
  textSize(14);
  text("X: "+mouseX, 1100, 20);
  text("Y: "+mouseY, 1100, 40);
} 

function mousePressed() {
  start();
  game = 1;
}
function start() {
  background(0);
  fill(47,47,47);
  rect(0,0, 1280, 60);
  movingCircle();
  console.log('cool');
}



function movingCircle() {
  
}
