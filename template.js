function setup() {
  createCanvas(1280, 720);
  background(220);
  fill(47,47,47);
  rect(0,0, 1280, 60);
  navbar();
  exercise1();
  exercise2();
  exercise3();
}

function navbar(){
  fill(47,47,47);
  rect(0,0, 1280, 100);
  fill(255,255,255);
  textSize(30);
  text('Stroke Solver - The number 1 assistant to help you with your strokes', 10,30);
  text('Exer')
}

function exercise1(){
  fill(153, 153, 153);
  rect(100, 150, 300, 400);
  fill(119, 119, 119);
  rect(125, 175, 250, 250);
  rect(125, 475, 250, 50);
  fill(255, 255, 255);
  textSize(20);
  text('Record: ', 150, 505);
}

function exercise2(){
  fill(153, 153, 153);
  rect(500, 150, 300, 400);
  fill(119, 119, 119);
  rect(525, 175, 250, 250);
  rect(525, 475, 250, 50);
  fill(255, 255, 255);
  textSize(20);
  text('Record: ', 550, 505);
}

function exercise3(){
  fill(153, 153, 153);
  rect(900, 150, 300, 400);
  fill(119, 119, 119);
  rect(925, 175, 250, 250);
  rect(925, 475, 250, 50);
  fill(255, 255, 255);
  textSize(20);
  text('Record: ', 950, 505);
}