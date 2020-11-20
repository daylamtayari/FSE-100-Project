var x1; //Coordinates for the 1st and 2nd points of the lines
var y1;
var x2;
var y2;
var complete = false;
var intervalX = 430; //Interval on which the X coordinates change between lines
var errorCount = 0; //Counts how long user is off path
var totalTime = 0; //Counts total time user takes to finish path

function setup() {
  createCanvas(1280, 720);
  drawPath1();
}

function draw() {
  onPath();
  drawPath1();
  timeTaken();
}

//Checks to see if user is following path1
function onPath() {
  path = true;
  //First Line
  if (mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 707) {
    print("On the path");
    path = true;
    background(220);
  }
  //2nd Line
  else if (mouseX > 10 && mouseX < 458 && mouseY < 710 && mouseY > 690) {
    print("still on the path");
    path = true;
    background(220);
  }
  //3rd Line
  else if (mouseX > 438 && mouseX < 460 && mouseY > 10 && mouseY < 710) {
    print("STILL on the path boy-o");
    path = true;
    background(220);
  }
  //4th Line
  else if (mouseX > 440 && mouseX < 890 && mouseY > 10 && mouseY < 31) {
    print("Guess what? Still on the path!");
    path = true;
    background(220);
  }
  //5th Line
  else if (mouseX > 865 && mouseX < 890 && mouseY > 10 && mouseY < 710) {
    print("Still good homie");
    path = true;
    background(220);
  }
  //6th Line
  else if (mouseX > 870 && mouseX < 1270 && mouseY > 690 && mouseY < 710) {
    print("Almost there!");
    path = true;
    background(220);
  }
  //7th and FINAL Line
  else if (mouseX > 1250 && mouseX < 1270 && mouseY > 13 && mouseY < 710) {
    print("Last line!");
    path = true;
    background(220);
  } else {
    print("Not on the path fam");
    path = false;
    errorCount++;
    background("red");
  }
  if (mouseX < 1270 && mouseX > 1250 && mouseY < 25 && mouseY > 10)
    complete = true;

  print(mouseX);
  print(mouseY);
  print("Times off the path: " + errorCount);
}

//Takes total amount of time taken to complete the path
function timeTaken() {
  if (complete == false) totalTime++;
  else
    print("Percentage of off track: " + (errorCount / totalTime) * 100 + "%");
}

//Draws Path1
function drawPath1() {
  //---------------Path1---------------
  //First line
  x1 = 20;
  y1 = 20;
  x2 = 20;
  y2 = 700;

  //Line is invisible so cursor can follow
  //for loop to create dotted line on full line
  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //2nd line
  x1 = x2;
  y1 = 700;
  x2 = x2 + intervalX;
  y2 = 700;

  for (var i = 0; i <= 20; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 50);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }

  //3rd Line
  x1 = x2;
  y1 = 700;
  x2 = x2;
  y2 = 20;

  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }

  //4th Line
  x1 = x2;
  y1 = 20;
  x2 = x2 + intervalX;
  y2 = 20;

  for (var i = 0; i <= 20; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //5th Line
  x1 = x2;
  y1 = 20;
  x2 = x2;
  y2 = 700;

  for (var i = 0; i <= 25; i++) {
    var x = lerp(x1, x2, i / 25);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //6th Line
  x1 = x2;
  y1 = 700;
  x2 = 1260; //Edge of screen
  y2 = 700;

  for (var i = 0; i <= 20; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 50);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //7th FINAL Line
  x1 = x2;
  y1 = 700;
  x2 = 1260; //Edge of screen;
  y2 = 20;

  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
}

var complete = false;
var intervalX = 430; //Interval on which the X coordinates change between lines
var errorCount = 0; //Counts how long user is off path
var totalTime = 0; //Counts total time user takes to finish path

function setup() {
  createCanvas(1280, 720);
  drawPath1();
}

function draw() {
  onPath();
  drawPath1();
  timeTaken();
}

//Checks to see if user is following path1
function onPath() {
  path = true;
  //First Line
  if (mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 707) {
    print("On the path");
    path = true;
    background(220);
  }
  //2nd Line
  else if (mouseX > 10 && mouseX < 458 && mouseY < 710 && mouseY > 690) {
    print("still on the path");
    path = true;
    background(220);
  }
  //3rd Line
  else if (mouseX > 438 && mouseX < 460 && mouseY > 10 && mouseY < 710) {
    print("STILL on the path boy-o");
    path = true;
    background(220);
  }
  //4th Line
  else if (mouseX > 440 && mouseX < 890 && mouseY > 10 && mouseY < 31) {
    print("Guess what? Still on the path!");
    path = true;
    background(220);
  }
  //5th Line
  else if (mouseX > 865 && mouseX < 890 && mouseY > 10 && mouseY < 710) {
    print("Still good homie");
    path = true;
    background(220);
  }
  //6th Line
  else if (mouseX > 870 && mouseX < 1270 && mouseY > 690 && mouseY < 710) {
    print("Almost there!");
    path = true;
    background(220);
  }
  //7th and FINAL Line
  else if (mouseX > 1250 && mouseX < 1270 && mouseY > 13 && mouseY < 710) {
    print("Last line!");
    path = true;
    background(220);
  } else {
    print("Not on the path fam");
    path = false;
    errorCount++;
    background("red");
  }
  if (mouseX < 1270 && mouseX > 1250 && mouseY < 25 && mouseY > 10)
    complete = true;

  print(mouseX);
  print(mouseY);
  print("Times off the path: " + errorCount);
}

//Takes total amount of time taken to complete the path
function timeTaken() {
  if (complete == false) totalTime++;
  else
    print("Percentage of off track: " + (errorCount / totalTime) * 100 + "%");
}

//Draws Path1
function drawPath1() {
  //---------------Path1---------------
  //First line
  x1 = 20;
  y1 = 20;
  x2 = 20;
  y2 = 700;

  //Line is invisible so cursor can follow
  //for loop to create dotted line on full line
  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //2nd line
  x1 = x2;
  y1 = 700;
  x2 = x2 + intervalX;
  y2 = 700;

  for (var i = 0; i <= 20; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 50);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }

  //3rd Line
  x1 = x2;
  y1 = 700;
  x2 = x2;
  y2 = 20;

  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }

  //4th Line
  x1 = x2;
  y1 = 20;
  x2 = x2 + intervalX;
  y2 = 20;

  for (var i = 0; i <= 20; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //5th Line
  x1 = x2;
  y1 = 20;
  x2 = x2;
  y2 = 700;

  for (var i = 0; i <= 25; i++) {
    var x = lerp(x1, x2, i / 25);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //6th Line
  x1 = x2;
  y1 = 700;
  x2 = 1260; //Edge of screen
  y2 = 700;

  for (var i = 0; i <= 20; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 50);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
  //7th FINAL Line
  x1 = x2;
  y1 = 700;
  x2 = 1260; //Edge of screen;
  y2 = 20;

  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 20);
    var y = lerp(y1, y2, i / 25);
    stroke("black");
    strokeWeight(8);
    point(x, y);
  }
}