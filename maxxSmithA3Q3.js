let darken;
let pizzaX;
let pizzaY;
let speedY;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  pizzaX = random(0, 380);
  pizzaY = 0;
  darken = 15;
  speedY = random(0, 5);
}

function draw() {
  background(132, 176, 209);
  
  drawScenery();
  drawPizzaMan(mouseX - 80, 250, 0.5);
  drawPizza(pizzaX, pizzaY, 1);
  pizzaY += speedY;
  
}

function drawPizzaMan(x, y, size){
  //Colors
  let skinColor = color(255, 227, 201);
  let darkSkin = color(255 - darken, 227 - darken, 201 - darken);
  let uniform = color(250, 82, 82)
  let darkUniform = color(250 - darken, 82 - darken, 82 - darken)
  let pants = color(38, 38, 46);
  
  push();
  translate(x, y);
  scale(size);
  push();
  translate(-35, 275);
  rotate(-90);
  translate(100, 0);
  noStroke();
  //Neck
  fill(darkSkin);
  rect(130, 240, 25, 60)
  arc(130, 300, 50, 50, 0, 90)
  rect(70, 300, 60, 25);
  //Arms
  fill(darkSkin);
  rect(-40, 220, 80, 25, 10);
  push();
  translate(0, 165);
  rect(-40, 220, 80, 25, 10);
  pop();
  //Uniform
  fill(uniform);
  rect(3, 250, 70, 130, 10);
  fill(darkUniform);
  arc(70, 315, 50, 80, 270, 315);
  arc(70, 315, 50, 80, 45, 90);
  beginShape();
  vertex(63, 250)
  vertex(23, 250);
  vertex(23, 210);
  vertex(63, 225);
  endShape(CLOSE);
  push();
  translate(0, 170);
  beginShape();
  vertex(63, 235);
  vertex(23, 250);
  vertex(23, 210);
  vertex(63, 210);
  endShape(CLOSE);
  pop();
  //Pants
  fill(pants);
  rect(-50, 250, 60, 130, 10, 0, 0, 10);
  //Legs
  fill(pants);
  beginShape();
  vertex(-50, 265);
  vertex(-80, 280);
  vertex(-80, 295);
  vertex(-50, 310)
  endShape(CLOSE);
  push();
  beginShape();
  translate(0, 50);
  vertex(-50, 265);
  vertex(-80, 280);
  vertex(-80, 295);
  vertex(-50, 310)
  endShape(CLOSE);
  pop();
  //Feet
  fill("saddlebrown");
  rect(-90, 260, 20, 50, 10);
  rect(-90, 320, 20, 50, 10);
  //Head
  fill(skinColor);
  rect(100, 100, 100, 100);
  arc(150, 200, 100, 100, 0, 180);
  arc(150, 100, 100, 100, 180, 0);
  //Mouth. Catch area is 190 +- 50
  fill("black");
  ellipse(190, 180, 50, 60);
  fill("red");
  ellipse(190, 195, 40, 20);
  //Top Teeth
  fill("white");
  rect(170, 154, 10, 15, 4);
  rect(180, 150, 10, 15, 4);
  rect(190, 150, 10, 15, 4);
  rect(200, 154, 10, 15, 4);
  //Bottom Teeth
  rect(170, 192, 10, 15, 4);
  rect(180, 196, 10, 15, 4);
  rect(190, 196, 10, 15, 4);
  rect(200, 192, 10, 15, 4);
  //Lips
  push();
  noFill();
  stroke(skinColor);
  strokeWeight(5);
  ellipse(190, 180, 53, 63);
  pop();
  //Ear
  fill(darkSkin);
  arc(105, 170, 50, 50, 90, 270);
  //Hair
  fill(214, 196, 122);
  arc(100, 100, 100, 100, 0, 100);
  //Hat
  fill(darkUniform);
  arc(150, 90, 110, 110, 180, 0);
  fill(uniform);
  rect(95, 75, 180, 30, 4);
  //Eyes
  fill("white");
  ellipse(200, 110, 45, 45);
  ellipse(145, 110, 45, 45);
  //Iris
  fill("deepskyblue");
  if (mouseIsPressed){
    fill("red");
    push();
    fill(214, 196, 122);
    rotate(10);
    rect(130, 50, 50, 10);
    rotate(-20);
    rect(160, 110, 50, 10);
    pop();
  }
  ellipse(208, 110, 25, 25);
  ellipse(153, 110, 25, 25);
  //Pupils
  fill("black");
  ellipse(210, 110, 15, 15);
  ellipse(155, 110, 15, 15);
  //Nose
  fill(darkSkin);
  rect(170, 110, 20, 40, 0, 0, 10, 10);
  pop();
  pop();
}
function drawScenery(){
  push();
  noStroke();
  let floor = color(227, 200, 127);
  let wall = color(212, 90, 66);
  let darkWall = color(212 - darken, 90 - darken, 66 - darken);
  //Floor
  fill(floor);
  beginShape();
  vertex(0, 400);
  vertex(0, 350);
  vertex(100, 210);
  vertex(300, 210);
  vertex(400, 350);
  vertex(400, 400);
  endShape(CLOSE);
  fill(wall);
  //Left Wall
  beginShape();
  vertex(0, 350);
  vertex(0,0);
  vertex(100, 0);
  vertex(100, 210);
  endShape();
  //Right Wall
  beginShape();
  vertex(400, 350);
  vertex(400, 0);
  vertex(300, 0);
  vertex(300, 210);
  endShape();
  //Back Wall
  fill(darkWall);
  rect(100, 0, 200, 210);
  //Grill
  push();
  fill("darkgray")
  translate(10, 0);
  beginShape();
  vertex(100, 210);
  vertex(0, 350);
  vertex(0, 270);
  vertex(100, 130);
  endShape();
  fill("dimgray");
  rect(-80, 270, 80, 80)
  pop();
  push();
  fill("silver");
  rect(-66, 265, 80, 10);
  fill("lightgray");
  beginShape();
  vertex(12, 265);
  vertex(12, 275);
  vertex(112, 135);
  vertex(112, 125);
  endShape(CLOSE);
  pop();
  push();
  fill("gainsboro");
  beginShape();
  vertex(12, 265);
  vertex(112, 125);
  vertex(90, 125);
  vertex(-12, 265);
  endShape(CLOSE);
  pop();
  //Door
  fill("burlywood")
  rect(140, 50, 120, 160);
  fill("black");
  rect(150, 60, 100, 150);
  //Order Window
  push();
  translate(20, -50)
  push();
  fill("grey");
  translate(-5,0);
  beginShape();
  vertex(300, 210);
  vertex(300, 90);
  vertex(400, 220);
  vertex(400, 350);
  endShape(CLOSE);
  pop();
  fill("lightskyblue");
  beginShape();
  vertex(300, 210);
  vertex(300, 100);
  vertex(400, 240);
  vertex(400, 350);
  endShape(CLOSE);
  pop();
  pop();
}
function drawPizza(x, y, size){
  push();
  translate(x,y);
  scale(size);
  push();
  translate(-5, -5);
  noStroke();
  fill("yellow");
  triangle(10, 10, 40, 10, 25, 40);
  fill("red");
  ellipse(20, 20, 6);
  ellipse(30, 15, 6);
  ellipse(25, 30, 6);
  fill(186, 161, 128);
  rect(7, 6, 35, 5, 10);
  pop();
  pop();
}
