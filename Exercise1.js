var x1; //Coordinates for the 1st and 2nd points of the lines
var y1;
var x2;
var y2;
var complete = false; //Checks if total path completed
var intervalX = 430; //Interval on which the X coordinates change between lines
var errorCount = 0; //Counts how long user is off path
var totalTime = 0; //Counts total time user takes to finish path


function setup() {
  createCanvas(1280, 720);
  drawPath1();
  textSize(40);
  fill('black');
  text('<-- start here!', 20, 20);
  monoSynth=new p5.MonoSynth;
}

function draw() {

  onPath();
  drawPath1();
  timeTaken();
  
  //Text for the user to see
  textSize(30);
  fill('white');
  text('<-- start here!', 40, 30);
  
  text('follow the path!', 120, 200);  
  
  text('Finish! -->', 1100, 30);
  
  text('Time taken ' + totalTime + ' seconds', 465, 625);


}


//Checks to see if user is following path1
function onPath() {
  path = true;
    //First Line
    if (mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 707 && complete==false) {
      path = true;
      background('green');
    }
    //2nd Line
    else if (mouseX > 10 && mouseX < 458 && mouseY < 710 && mouseY > 690 && complete==false) {
      path = true;
      background('green');
    }
    //3rd Line
    else if (mouseX > 438 && mouseX < 460 && mouseY > 10 && mouseY < 710 && complete==false) {
      path = true;
      background('green');
    }
    //4th Line
    else if (mouseX > 440 && mouseX < 890 && mouseY > 10 && mouseY < 31 && complete==false) {
      path = true;
      background('green');
    }
    //5th Line
    else if (mouseX > 865 && mouseX < 890 && mouseY > 10 && mouseY < 710 && complete==false) {
      path = true;
      background('green');
    }
    //6th Line
    else if (mouseX > 870 && mouseX < 1270 && mouseY > 690 && mouseY < 710 && complete==false) {
      path = true;
      background('green');
    }
    //7th and FINAL Line
    else if (mouseX > 1250 && mouseX < 1270 && mouseY > 13 && mouseY < 710 && complete==false) {
      path = true;
      background('green');
    } 
    else if(mouseX >= 1270 && mouseY > 710){
      path=true;
      complete=true;
      audioEndTrack();
    }
    else if(complete==false){
      path = false;
      background('yellow');
      if(frameCount % 60 == 0){
        errorCount++;
      }
      if(mouseX >=0 && mouseX <=1280 && mouseY>=0 && mouseY<720){
        audioOffTrack();
      }
    }
    
    if(complete == true){
      background('green');
    }
    if (mouseX < 1270 && mouseX > 1250 && mouseY < 25 && mouseY > 10)
      complete = true;

  }

  //Takes total amount of time taken to complete the path
  function timeTaken() {

    if (complete == false && frameCount % 60 == 0)
      totalTime++;
    else
    {
      textSize(28);
      text("Time spent off track: " + errorCount + " seconds", 465, 680);
    }

  }

  function audioEndTrack(){
    userStartAudio();
    let note='D4';
    let velocity=1;
    let time=0;
    let duration=1;
    monoSynth.play(note, velocity, time, duration);
  }

  function audioOffTrack(){
    userStartAudio();
    let note='D3';
    let velocity=1;
    let time=0;
    let duration=0.3;
    monoSynth.play(note, velocity, time, duration);
  }

  //Draws Path1
  function drawPath1() {
    
    var i;

    //---------------Path1---------------
    //First line
    var x1 = 20;
    var y1 = 20;
    var x2 = 20;
    var y2 = 700;

    //Line is invisible so cursor can follow
    //for loop to create dotted line on full line
    for (i = 0; i <= 50; i++) {
      x = lerp(x1, x2, i / 50);
      y = lerp(y1, y2, i / 25);
      stroke('black');
      strokeWeight(8);
      point(x, y);
    }
    //2nd line 
    x1 = x2;
    y1 = 700;
    x2 = x2 + intervalX;
    y2 = 700;

    for (i = 0; i <= 20; i++) {
      x = lerp(x1, x2, i / 20);
      y = lerp(y1, y2, i / 50);
      stroke('black');
      strokeWeight(8);
      point(x, y);
    }

    //3rd Line
    x1 = x2;
    y1 = 700;
    x2 = x2;
    y2 = 20;

    for (i = 0; i <= 50; i++) {
      x = lerp(x1, x2, i / 50);
      y = lerp(y1, y2, i / 25);
      stroke('black');
      strokeWeight(8);
      point(x, y);
    }

    //4th Line
    x1 = x2;
    y1 = 20;
    x2 = x2 + intervalX;
    y2 = 20;

    for (i = 0; i <= 20; i++) {
      x = lerp(x1, x2, i / 20);
      y = lerp(y1, y2, i / 25);
      stroke('black');
      strokeWeight(8);
      point(x, y);
    }
    //5th Line
    x1 = x2;
    y1 = 20;
    x2 = x2;
    y2 = 700;

    for (i = 0; i <= 25; i++) {
      x = lerp(x1, x2, i / 25);
      y = lerp(y1, y2, i / 25);
      stroke('black');
      strokeWeight(8);
      point(x, y);
    }
    //6th Line
    x1 = x2;
    y1 = 700;
    x2 = 1260; //Edge of screen
    y2 = 700;

    for (i = 0; i <= 20; i++) {
      x = lerp(x1, x2, i / 20);
      y = lerp(y1, y2, i / 50);
      stroke('black');
      strokeWeight(8);
      point(x, y);
    }
    //7th FINAL Line
    x1 = x2;
    y1 = 700;
    x2 = 1260; //Edge of screen;
    y2 = 20;

    for (i = 0; i <= 50; i++) {
      x = lerp(x1, x2, i / 20);
      y = lerp(y1, y2, i / 25);
      stroke('black');
      strokeWeight(8);
      point(x, y);
    }
  }