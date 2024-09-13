
// vocal, drum, bass, and other are volumes ranging from 0 to 100

  // colorMode(HSB, 100);
  // background(255);
  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER);
  // strokeWeight(9)
  // stroke(drum,80,80);
  //textSize(24);

  // var drumMap =map(drum, 0,100, 30,90);
  // var lengthOfLine = 300;
  // var LineStart = 100;
  // var LineEnd = LineStart+lengthOfLine;
 
  // line(LineStart, 300, LineEnd, 300);
  // line(LineStart, 310, LineEnd, 310);
  // line(LineStart, 320, LineEnd, 320);
let surfer; 
let seagull;
let img;
let firstRun = true
function draw_one_frame(words, vocal, drum, bass, other, counter) {
let heightStretch = map(drum,0,100,0.5,1,true)
if(firstRun){
surfer = loadImage('surfer.png')//https://pngimg.com/image/102715

seagull = loadImage('seagull.png')//https://clipart-library.com/free/seagull-transparent.html


img = loadImage('Wave.png')//https://www.shutterstock.com/search/cartoon-water-waves
firstRun = false
}

if(counter<900){

background(0)
}
if (counter < 3400){
  background (127, 200, 227)
}else {
  //tint(100,100,150)
  background (0)
}
// img.resize(620,380*waveStretch)
// image(img,200,330,620,380);//
push();
 translate(0,canvasHeight+20)
 image(img,0,0,canvasWidth,-canvasHeight* heightStretch);
 pop();
 image(surfer,4*vocal,-bass +350,250,250)
 image(seagull,5*bass,bass,200,150)
textSize(30)
// text('drum: ' + Math.round(drum), 0,0)
// text('heightStretch: ' + round(heightStretch,1.5), 0, 0)


}

// background(20)
// fill(255,0,0)
// push()
// translate(300,200)
// ellipse(0,0,10,10)
// rotate(18)
// img(img,100, 100);
// }








// fill(0)
//   circle(400,480,180)
//   circle(200, 300, 140)
//   circle(600, 300, 140)
  


// fill(255)
//  let mouthSize = map(vocal,0,100,40,400)
//  let ellipseSize = map(drum,0,100,150,400)
//  ellipse(100,200, ellipseSize,)
//  ellipse(400,200, ellipseSize,)
//  ellipse(250,500,300,mouthSize,)
//  fill(0)
//  ellipse(100,200, 30)
//  ellipse(400,200, 30)
//  fill(255)
//  text(words, 400, 500)

//  for(let i = 1; i <= 6; i ++){
// let loopyY = y * i;

// ellise(400, loopyY, 100)
 


//  strokeWeight(20)
//  arc(80,40,30,30,210,290)
//  arc(120,40,30,30,250,330)
 
 
 
 
  // let eyeSize = map(drum, 0, 100, 70, 220)
  // ellipse(200,200,eyeSize,eyeSize)
  // ellipse(500,200,eyeSize,eyeSize)
  // let mouthSize = map(vocal, 0,100, 60, 350)
  // rect(350,599,299,mouthSize);



  























  
// let bar_spacing = height / 10;
// let bar_height = width / 12;
// let bar_pos_x = width / 2;


// // vocal bar is red
// fill(200, 0, 0);
// rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
// fill(0);
// text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

// // drum bar is green
// fill(0, 200, 0);
// rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
// fill(0);
// text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

// // bass bar is blue
// fill(50, 50, 240);
// rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
// fill(0);
// text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

// // other bar is white
// fill(200, 200, 200);
// rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
// fill(0);
// text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
// fill(255, 255, 0);

// // display "words"
// textAlign(CENTER);
// textSize(vocal);
// text(words, width/2, height/3);
// }