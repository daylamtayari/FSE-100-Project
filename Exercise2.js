//Global Variables
let size = 70; //Size of the ellipse
let x, y; //Coordinates for the ellipse
let xSpeed = 3; //Speed for the ellipse
let ySpeed = 3;
let xDirection = 1;
let yDirection = 1; //Directions for the ellipse (left-right, top-bottom)
let bounce = 1; //Counts how many times ellipse has bounced off canvas edges
let onTrack = false; //Keeps track of user's input on the ellipse
let timer = 0; //Timer to track how long user is following ellipse


function setup() {
  createCanvas(1280, 720);
  ellipseMode(RADIUS); //Sets ellipse values to radius
  //Starting position for ellipse
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);

  //Updating coordinates of the ellipse
  x = x + xSpeed * xDirection;
  y = y + ySpeed * yDirection;

  //Test to see if ellipse hits screen boundary, if so it bounces off
  if (x > width - size || x < size) {
    xDirection = xDirection * -1;
    bounce++;
  }
  if (y > height - size || y < size) {
    yDirection = yDirection * -1;
    bounce++
  }

  //Creating the Ellipse
  stroke(50);
  fill('yellow');
  ellipse(x, y, size, size);

  //Function calling
  bounceCount();
  userTrack();
  printText();
}

//Function that collects how many times ellipse has bounced and whether or not to increase the speed
function bounceCount() {
  if ((bounce % 5) == 0) {
    //Speeds up ball on every bounce multiple of 5
    xSpeed = 5;
    ySpeed = 5;
  }
  else{
    //Returns normal speed
    xSpeed = 3;
    ySpeed = 3;
  }
}

//Changes color of the ellipse when mouse is on it
function userTrack(){
  if(dist (x,y,mouseX,mouseY) < size ){
    fill('green');
    ellipse(x, y, size, size);
    onTrack = true;
  }
  else {
    fill('yellow');
    ellipse(x,y, size, size);
    onTrack = false;
  }
}

//Prints on screen instructions + time
function printText(){
  //Text
  fill('black');
  textSize(40);
  text('Follow the ball!', 480, 100);
  
  if(frameCount % 60 == 0 && onTrack == true){
    timer++;
  }
  textSize(40);
  fill('black');
  text('Followed the ball for ' + timer + ' seconds!', 350, 600);
}