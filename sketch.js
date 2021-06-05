function setup() {
  createCanvas(600, 600);
  background(220);
  mc=0
  penwidth=15
  let r,g,b
}

function draw() {

  if (50<mouseY<550 && mouseIsPressed) {
    fill(mc)
    strokeWeight (0)
    ellipse (mouseX, mouseY,penwidth,penwidth) 
  }
  strokeWeight(1)
  fill('green' )
  ellipse(574,574,50,50)
  distance = dist(550,550,mouseX,mouseY)
  radius = 50/2
  if(distance < radius && mouseIsPressed){
    mc = 'green'
  } 
  fill('red' )
  ellipse(523,574,50,50)
  distance = dist(500,550,mouseX,mouseY)
  radius = 50/2
  if(distance < radius && mouseIsPressed){
    mc = 'red'
  } 
  fill('blue' )
  ellipse(472,574,50,50)
  distance = dist(450,550,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    mc = 'blue'
  }
  fill('purple' )
  ellipse(421,574,50,50)
  distance = dist(425,550,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    mc = 'purple'
  }
  fill('black' )
  ellipse(370,574,50,50)
  distance = dist(375,550,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    mc = 'black'
  }
  fill(4,7,98)
  quad(0,0,100,0,100,50,0,50)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Clear',50,50)
  if(100>mouseX>0 && 50>mouseY>0 && mouseIsPressed){
    background(220)
  }
  fill(4,7,98)
  quad(110,0,210,0,210,50,110,50)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Erase',160,50)
  if (110<mouseX && mouseX<220 && 0<mouseY && mouseY<50 && mouseIsPressed){
    mc = 220
  }
  fill(4,7,98)
  quad(220,0,420,0,420,50,220,50)
  fill(84,90,255)
  textSize(30)
  textAlign(CENTER)
  text('Random colour',320,50)
  if (220<mouseX && mouseX<420 && 0<mouseY && mouseY<50 && mouseIsPressed){
    r= random(0,255);
    g= random(0,255);
    b= random(0,255);
    mc = color(r,g,b);
  }
} 