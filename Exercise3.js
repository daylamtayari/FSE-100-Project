//Moveable Circle 1 (Top left)
let x1 = 90;
let y1 = 120;
let d1 = 125;

// Movable Circle 2 (Top Right)
let x2 = 550;
let y2 = 120;
let d2 = 125;

//Movable Circle 3 (Bottom)
let x3 = 90;
let y3 = 600;
let d3 = 125;


//temporary booleans for challenge completion
let temp1 = false;
let temp2 = false;
let temp3 = false;

//Audio cue for challenge completion
let monoSynth;
monoSynth = new p5.MonoSynth();
let note = 'D4';
// note velocity (volume, from 0 to 1)
let time = 0;
// note duration (in seconds)
let dur = 1/6;

//temporary audio booleans to stop loop
let audio1 = false;
let audio2 = false;
let audio3 = false;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background('yellow');
      
  //First Pinch Goal
  fill('white');
  strokeWeight(3);
  circle(250, 270, 125); //Top Left
  circle(400, 270, 125);  //Top Right
  circle(325, 412, 125); //Bottom
    fill('pink');
  
  //2nd Pinch Goal
  fill('white');
    circle(900, 270, 125); //Top Left
    circle(1050, 270, 125);  //Top Right
    circle(975, 412, 125); //Bottom
  
  //End Pinch Goal
  fill('white');
  circle(740, 120, 125); //Top Left
  circle(1200, 120, 125);  //Top Right
  circle(740, 600, 125); //Bottom
  
  //Creating movable ellipses
  noStroke();
  fill('pink');
   ellipse(x1, y1, d1, d1); //Top left
   ellipse(x2, y2, d2, d2); //Top Right 
   ellipse(x3, y3, d3, d3); //Bottom
  
  //Lines to help guide user
  stroke('black');
  strokeWeight(5);
  //Top left arrow
  line(140, 170, 190, 230);
  line(190, 228, 190, 208);
  line(190, 230, 165, 230);
  
  //Top right arrow
  line(495, 166, 450, 217);
  line(450, 217, 475, 215);
  line(450, 217, 449, 196);
  
  //Bottom left arrow
  line(145, 558, 270, 454);
  line(270, 454, 271, 471);
  line(270, 454, 250, 451);
  
  //Mid arrow
  line(470, 331, 830, 331); 
  line(830, 331, 810, 304);
  line(830, 331, 810, 355);
  
  //Endgoal top left arrow
  line(845, 220, 788, 168);
  line(788, 168, 787, 189);
  line(788, 168, 812, 163);
  
  //Endgoal top right arrow
  line(1098, 215, 1147,165);
  line(1147, 165, 1148, 180);
  line(1147, 165, 1128, 164);
  
  
  //Endgoal bottom left arrow
  line(914, 453, 794, 551);
  line(794, 551, 792, 532);
  line(794, 551, 820, 555);
  
  
  moveCircle();
  if (temp1 == false) {
  pinchGoal1();
  }
  if (temp1 == true) {
text('You Completed The First Challenge', 150, 50, 700, 800);
      if (audio1 == false) {
    monoSynth.play(note, 1, time, dur);
        audio1 = true;
      }
  }
 
  if (temp2 == false) {
    pinchGoal2();
  }
  if (temp2 == true) {
    text('You Completed The Second Challenge', 500, 400, 700, 800);
    if (audio2 == false) {
    monoSynth.play(note, 1, time, dur);
        audio2 = true;
      }
     
  }
  if (temp3 == false) {
    pinchGoal3();
  }
  if (temp3 == true) {
    text('You Completed The Third Challenge', 800, 650, 700, 800);
    if (audio3 == false) {
    monoSynth.play('D3', 1, time, dur);
        audio3 = true;
      }
     
  }

  

  if (temp1 == true && temp2 == true && temp3 == true ){
  textSize(20);
  text('You Completed The Challenge!!', 200, 650, 700, 800);
  
  }
}

//Checks for mouse click being released
function mouseReleased()
{
  console.log(mouseX, mouseY);

}

//Function to move pink circles
function moveCircle()
{
    
  if(dist(x1, y1, mouseX, mouseY) < d1 / 2 && mouseIsPressed)
    {
      x1 = mouseX;
      y1 = mouseY;
    }
  
  if(dist(x2, y2, mouseX, mouseY) < d2 / 2 && mouseIsPressed)
    {
      x2 = mouseX;
      y2 = mouseY;
    }
  

  
  if(dist(x3, y3, mouseX, mouseY) < d3 / 2 && mouseIsPressed)
    {
      x3 = mouseX;
      y3 = mouseY;
    }

  
}
function pinchGoal1() {
  let first = false;
  let second = false;
  let third = false;

 
    if (x1 <= 260 && x1 >= 240) {
      if (y1 <= 280 && y1 >= 260) {
        first = true;
      }
    }
    if (x2 <= 410 && x2 >= 390) {
      if (y2 <= 280 && y2 >= 260) {
        second = true;
      }
    }
    if (x3<= 340 && x3 >= 315) {
      if (y3 <= 425 && y3 >= 400) {
        third = true;
      }
    }
    if (first ==true && second ==true && third ==true) {
      temp1 = true;
    }

}

function pinchGoal2() {
  let first2 = false;
  let second2 = false;
  let third2 = false;

 
    if (x1 <= 910 && x1 >= 890) {
      if (y1 <= 280 && y1 >= 260) {
        first2 = true;
      }
    }
    if (x2 <= 1060 && x2 >= 1040) {
      if (y2 <= 280 && y2 >= 260) {
        second2 = true;
      }
    }
    if (x3<= 990 && x3 >= 965) {
      if (y3 <= 430 && y3 >= 400) {
        third2 = true;
      }
    }
    if (first2 ==true && second2 ==true && third2 ==true) {
      print("Second challenge completed");
      temp2 = true;
    }

}

function pinchGoal3() {
  let first3 = false;
  let second3 = false;
  let third3 = false;

 
    if (x1 <= 750 && x1 >= 715) {
      if (y1 <= 145 && y1 >= 105) {
        first3 = true;
      }
    }
    if (x2 <= 1215 && x2 >= 1180) {
      if (y2 <= 145 && y2 >= 105) {
        second3 = true;
      }
    }
    if (x3<= 750 && x3 >= 715) {
      if (y3 <= 620 && y3 >= 580) {
        third3 = true;
      }
    }
    if (first3 ==true && second3 ==true && third3 ==true) {
      print("Third challenge completed");
      temp3 = true;
    }

}
