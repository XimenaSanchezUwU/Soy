let img;
let myFont;
function preload() {
  img = loadImage('assets/18_Años.png');
  myFont = loadFont('assets/Dude-Regular.otf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  fill(random(255), random (237), 244);
  textSize(75)
  text('Ahora...',355, 650);
  text('¿Soy un adulto?', 500, random(650));
  frameRate(5)
}