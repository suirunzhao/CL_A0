//Assignment 03: Time
//Suirun Zhao

let x = 0;
let tree;
let mouse = [];
let myFont;
let words = ['festive', 'Saint Nicholas', 'Kris Kringle', 'elves', 'jolly', 'reindeer', 'carols', 'Xmas', 'yuletide', 'tinsel', 'stocking', 'presents', 'fruitcake', 'chimney', 'family', 'candy', 'pinecone', 'spirit', 'tradition', 'Rudolph', 'sleigh', 'holiday', 'holly', 'ornaments', 'Scrooge', 'sled', 'snowball', 'St. Nicks', 'snowman', 'rejoice', 'Father Christmas', 'Jack Frost', 'Santa’s helpers', 'Santa’s workshop', 'Frosty the Snowman', 'sleigh bells', 'gingerbread house', 'plum pudding and season’s greetings'];

// function preload(){
//   myFont = loadFont('CormorantSC-Medium.ttf');
  
// }

function mousePressed(){
  mouse.push(new Snow(mouseX, mouseY));
}
function keyPressed(){
  //mouse.pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(CENTER);
  background(random(20)+205,random(20)+205,random(20)+205);
  textSize(30);
  textAlign(CENTER);
  fill(0,80);
  textFont('Times New Roman');
  text(random(words), width/2,8*height/9);
  
}
  
function draw() {
    fill(255);
    for(i = 0; i < mouse.length; i++){
    mouse[i].update();
    mouse[i].display();
    }  
    strokeWeight(0.5);
    for(let x = 0; x < width; x += 5){
        let y = sin(x);
  
  x++;   
    //grid
    stroke(0);
    point(width/2+tan(x)*random(width),height/2+sin(x)*height*0.5);
    point(width/2+cos(x)*random(width),height/2+sin(x)*height*2);
    point(width/4+cos(x)*width/1.5,height/2);
    
    //black graphics
    point(width/2+sin(x)*random(width),height/2+tan(x)*random(100));//tree shadow
      //small
    point(width/4+cos(x)*random(80),height/2+cos(x)*random(80));
    point(width/2+width/5+cos(x)*random(50),height/4+cos(x)*random(50));
    point(width/2+width/3+tan(x)*random(50),height/4+tan(x)*random(50));
    point(width/2-width/3+tan(x)*random(50),height/4+tan(x)*random(50));
    
    //white graphics
    stroke(225); 
      
      //small
    point(width/2+cos(x)*random(100),height/1.5+cos(x)*random(100));
    point(width/2+width/3+cos(x)*random(70),height/2+height/3+cos(x)*random(70));
    point(width/6+cos(x)*random(50),height/2+height/3+cos(x)*random(50));
      
      //big
    point(width/2-width/3+sin(x)*random(50),height/3+tan(x)*random(50));
    point(width/2+width/5+sin(x)*random(50),height/2-height/3+tan(x)*random(250));
    point(width/2-width/3+tan(x)*random(50),height/2+tan(x)*random(50));
}
}

class Snow { 
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = random(1,10);
    this.rotate = random(50);
    this.speed = random(100);
  }
  
  update(){
    this.rotate += this.speed;
  }
  
  display(){
    noStroke();
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotate));
    ellipse(10,1, this.size, this.size);
    pop();
  }
}