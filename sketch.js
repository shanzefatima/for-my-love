//Code for the heart from https://happycoding.io/examples/processing/calling-functions/heart


////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////VARIABLES//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//Speed of jitters
let speed = 1;
//Stars
let stars = [];
let shootheight = 0;
let shootwidth = 1500;
let shootwidth2 = -1500;
let shootheight2 = 0;
//Image
let img;
//State to trigger ending
let state = 0;
//Background noise
let noiseValR, noiseValG, noiseValB;


////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////PRELOAD////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function preload() {
  img = loadImage('assets/lafemme.png');
}


////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////SETUP//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseValR = random(5);
  noiseValG = random(5);
  noiseValB = random(5);
  //Add 70 stars to array and instantiate the class
  for (let i = 0; i < 70; i++) {
  stars.push(new Jitter());
  }
}


////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DRAW///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function draw() {
  if (state == 0){
  background(255, 192, 203, 100);

  //Buttons
  fill(255);
  square(50, 50, 50);
  square(50, 150, 50);
  square(50, 250, 50);
  square(50, 350, 50);
  square(50, 450, 50);
  square(50, 550, 50);
  //Button text
  fill(234, 145, 90);
  textSize(20);
  textFont('Georgia');
  text('1', 69, 83);
  text('2', 69, 183);
  text('3', 69, 281);
  text('4', 69, 381);
  text('5', 68, 480);
  text('6', 68, 581);

  if (speed == 3){
    fill(255);
    text('Hi Mehr!', 200, 200);

  } else if (speed == 10){
    fill(255);
    text('Hi Mehr!', 200, 200);
    text('i just wanted to say that', 200, 240);


  } else if (speed == 50){
    fill(255);
    text('Hi Mehr!', 200, 200);
    text('i just wanted to say that', 200, 240);
    text('you are the love of my life!', 200, 280);

  } else if (speed == 100){
    fill(255);
    text('Hi Mehr!', 200, 200);
    text('i just wanted to say that', 200, 240);
    text('you are the love of my life!', 200, 280);
    text('and that i will be in love with you', width-450, 530);

  } else if (speed == 200){
    fill(255);
    text('Hi Mehr!', 200, 200);
    text('i just wanted to say that', 200, 240);
    text('you are the love of my life!', 200, 280);
    text('and that i will be in love with you', width-450, 530);
    text('until the end of time...', width-350, 570);
  }



  //HEART//
  let ww = width/2;
  let hh = height+50;
  ww = ww+(random(-speed, speed));
  hh = hh+(random(-speed, speed));
  //HEART//
  fill(255, 0, 0);
  noStroke();
  beginShape();
  curveVertex(ww, hh);
  curveVertex(ww, hh-330);
  curveVertex(ww-120, hh-450);
  curveVertex(ww-75, hh-525);
  curveVertex(ww, hh-500);
  curveVertex(ww, hh-300);
  endShape();
  //HEART//
  beginShape();
  curveVertex(ww, hh-300);
  curveVertex(ww, hh-500);
  curveVertex(ww+75, hh-525);
  curveVertex(ww+120, hh-450);
  curveVertex(ww, hh-330);
  curveVertex(ww, hh);
  endShape();
  //HEART//


  if (mouseIsPressed == true){
    textSize(25);
    textFont('Georgia');

    //First button
    if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100){
      speed = 3;

      //Second button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 150 && mouseY < 200){
      speed = 10;
    
      //Third button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 250 && mouseY < 300){
      speed = 50;

      //Fourth button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 350 && mouseY < 400){
      speed = 100;

      //Fifth button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 450 && mouseY < 500){
      speed = 200;

      //Sixth button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 550 && mouseY < 600){
      speed = 201;
    }
  }
  

if (speed == 201){
  //Ending screen
  bigend();
}


  ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////LA FEMME///////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  } else if (state == 1){

    //Noise background
    noiseValR = noiseValR + 0.01;
    noiseValG = noiseValG + 0.01;
    noiseValB = noiseValB + 0.01;
    rVal = noise(noiseValR) * 400;
    gVal = noise(noiseValG) * 400;
    bVal = noise(noiseValB) * 400;
    background(rVal, gVal, bVal, 50);

    //Tickets image
    img.resize(700, 0);
    image(img, (width/2-350)+(random(-3, 3)), (height/2-225)+(random(-3, 3)));
    
    //From line
    fill(gVal, bVal, rVal);
    text('love from your soulmate, Shanze :) xx', width-230, height-40);


    //Cursor heart
    fill(bVal, rVal, gVal);
    noStroke();
    beginShape();
    curveVertex(mouseX, mouseY+400);
    curveVertex(mouseX, mouseY+70);
    curveVertex(mouseX-120, mouseY-30);
    curveVertex(mouseX-75, mouseY-125);
    curveVertex(mouseX, mouseY-100);
    curveVertex(mouseX, mouseY);
    endShape();
    //HEART//
    beginShape();
    curveVertex(mouseX, mouseY+100);
    curveVertex(mouseX, mouseY-100);
    curveVertex(mouseX+75, mouseY-125);
    curveVertex(mouseX+120, mouseY-50);
    curveVertex(mouseX, mouseY+70);
    curveVertex(mouseX, mouseY+400);
    endShape();
  }
}





////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////NIGHT/SKY//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function bigend(){
  background(7, 11, 52);

  //Move and display stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }

  fill(255);
  square(width-300, height-200, 100);
  textSize(25);
  textFont('Georgia');
  fill(255, 0, 0);
  textSize(15);
  text('click here', width-290, height-160);
  text('for your gift', width-290, height-140)
  text('heart exploded sorry love ya too much', (width/2)-350, (height/2)-100);
  text('happy holidays day my angel - thankful for you everyday  ;)', width/2, (height/2));
  text('Shanze & Mehr forever <3', width/2-150, height/2 + 100);

  //Shooting stars
    if (shootheight<height+50){
      for(let j = 0; j < 15; j++){
        fill(255, 190, 56);
        ellipse(shootwidth-j*-4, shootheight-j*4, 15-j);
        shootheight++;
        shootwidth--;
      }
} else {
  if (shootwidth<width+50){
    for (let l = 0; l<30; l++){
      fill(250, 190, 15);
      ellipse(shootwidth2-l*4, shootheight2-l*0.5, 30-l);
      shootheight2 = shootheight2 + 0.1;
      shootwidth2++;
    }
  }
}

//Call ending
if (mouseIsPressed == true){
  if (mouseX > width-300 && mouseY > height-200 && mouseX < width-100 && mouseY < height-100){
    surprise();
  }
}
}







////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////GIFT///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function surprise(){
  state = 1;
  background(255, 179, 255);
}
 




////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////STARS//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 10);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(192, 192, 192);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
