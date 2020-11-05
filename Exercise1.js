var x1;
var y1;
var x2;
var y2;

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(220);


  //---------------Path1---------------
  //First line
  var x1 = 20;
  var y1 = 20;
  var x2 = 20;
  var y2 = 1040;

  strokeWeight(20);
  stroke('red');
  line(x1, y1, x2, y2);
  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 20);
    stroke('black');
    strokeWeight(8);
    point(x, y);
  }
  //2nd line 
  var x1 = 20;
  var y1 = 1040;
  var x2 = 800; 
  var y2 = 1040;

  strokeWeight(20);
  stroke('red');
  line(x1, y1, x2, y2);
  for (var i = 0; i <= 25; i++) {
    var x = lerp(x1, x2, i / 25);
    var y = lerp(y1, y2, i / 50);
    stroke('black');
    strokeWeight(8);
    point(x, y);
  }

  //3rd Line
  var x1 = 800;
  var y1 = 1040;
  var x2 = 800;
  var y2 = 20;

  strokeWeight(20);
  stroke('red');
  line(x1, y1, x2, y2);
  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 25);
    stroke('black');
    strokeWeight(8);
    point(x, y);
  }

  //4th Line
  var x1 = 800;
  var y1 = 20;
  var x2 = 1500;
  var y2 = 20;

  strokeWeight(20);
  stroke('red');
  line(x1, y1, x2, y2);
  for (var i = 0; i <= 25; i++) {
    var x = lerp(x1, x2, i / 25);
    var y = lerp(y1, y2, i / 25);
    stroke('black');
    strokeWeight(8);
    point(x, y);
  }
  //5th Line
  var x1 = 1500;
  var y1 = 20;
  var x2 = 1500;
  var y2 = 1040;

  strokeWeight(20);
  stroke('red');
  line(x1, y1, x2, y2);
  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 25);
    stroke('black');
    strokeWeight(8);
    point(x, y);
  }
  //6th Line
  var x1 = 1500;
  var y1 = 1040;
  var x2 = 1900;
  var y2 = 1040;

  strokeWeight(20);
  stroke('red');
  line(x1, y1, x2, y2);
  for (var i = 0; i <= 25; i++) {
    var x = lerp(x1, x2, i / 12);
    var y = lerp(y1, y2, i / 50);
    stroke('black');
    strokeWeight(8);
    point(x, y);
  }
  //7th FINAL Line
  var x1 = 1900;
  var y1 = 1040;
  var x2 = 1900;
  var y2 = 20;

  strokeWeight(20);
  stroke('red');
  line(x1, y1, x2, y2);
  for (var i = 0; i <= 50; i++) {
    var x = lerp(x1, x2, i / 50);
    var y = lerp(y1, y2, i / 25);
    stroke('black');
    strokeWeight(8);
    point(x, y);
  }
  //Path1 endPoint
  let endPointX = 1900;
  let endPointY = 20;
  
  onPath();

  ////---------------END OF Path1---------------

}

function onPath() 
{
  
}