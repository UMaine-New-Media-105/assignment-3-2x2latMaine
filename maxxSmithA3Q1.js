function setup() {
  createCanvas(400, 400);
  
  angleMode(DEGREES);
}

function draw() {
  background(132, 176, 209);
  
  drawScenery();
  drawCatcher(mouseX - 80, 250, 0.5);
}

function drawCatcher(x, y, size){
  //Colors
  let darken = 15;
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
  //Uniform
  fill(uniform);
  rect(3, 250, 70, 130, 10);
  fill(darkUniform);
  arc(70, 315, 50, 80, 270, 315);
  arc(70, 315, 50, 80, 45, 90);
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
  //Mouth. Catch ara is 190 +- 50
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
  //Floor
  fill(227, 200, 127);
  rect(0, 350, width, 100);
  pop();
}
