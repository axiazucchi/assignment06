var myData;
var people = [];
var kenny;
var opac = 255;
var opac2 = 0;

function preload() {
  myData = loadJSON('assets/peopleinspace.json');
  img = loadImage("./assets/cow.png");
  img2 = loadImage("./assets/kenny.png");
  img3 = loadImage("./assets/space.png");
  img4 = loadImage("./assets/alien.png");
  img5 = loadImage("./assets/asteroid.png");
  img6 = loadImage("./assets/kennydead.png");
}

function setup() {
  createCanvas(500, 500);
  
   kenny = new Kenny
  
  for(var i = 0; i < myData.people.length; i++) {
    var astroData = myData.people[i];
    var newAstronaut = new Astronaut(astroData.launchdate, astroData.name, astroData.title);
    people.push(newAstronaut);
  }
  
}

function draw() {
  
// background(color('#262727'));
  image(img3,width/2,height/2,500,500);


  kenny.move();
	kenny.display();

	
	for(var i = 0; i < people.length; i++) {
	  var astronaut = people[i];
	  astronaut.move();
	  astronaut.display();
	}
	push();
	fill(color('#dfdfdf'));
  textAlign(CENTER);
  textSize(12);
  text('click or press any key', width/2, 480);
  pop();
}

//settings per cow

function Astronaut(launchDate, name, title) {

    this.name = name;
    this.title = title;
  
    this.launchDate = Date.parse(launchDate);

    var timeInSpace = Date.now() - this.launchDate;

    this.radius = floor(timeInSpace / (1000 * 60 * 60 * 24)) / 5;
  
//coordinate con incrementi

    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    
    this.incrementX = 0.8;
    this.incrementY = 0.8;
    
    this.z = random(500, 0);
    this.k = random(500, 0);
    
    this.incrementZ = 0.4;
    this.incrementK = 0.4;
    
    this.j = random(500, 0);
    this.w = random(500, 0);
    
    this.incrementJ = 0.6;
    this.incrementW = 0.6;
    
    this.display = function() {
        
        imageMode(CENTER);
        image(img, this.x, this.y, this.radius*4.5, this.radius*3.5);
        
        image(img4, this.z, this.k, 40, 60);
        
      push();
        tint(255,opac2);
        image(img5, this.j, this.w, 50, 50);
      pop();
      
       if(mouseIsPressed) {
        fill(color('#dfdfdf'));
        textAlign(CENTER);
        text(this.name, this.x, this.y + this.radius + 40);
      }
      
    }
    
    this.move = function() {
        
        this.x += this.incrementX;
        this.y += this.incrementY;
        
        this.z += this.incrementZ;
        this.k += this.incrementK;
        
        this.j += this.incrementJ;
        this.w += this.incrementW;
        
        
        if (this.x > width - this.radius || this.x < this.radius){
            this.incrementX *= -1
        }

        if (this.y > height - this.radius || this.y < this.radius){
            this.incrementY *= -1
        }
        
        if (this.z > width - 50 || this.x < 50){
            this.incrementZ *= -1
        }

        if (this.k > height - 50 || this.k < 50){
            this.incrementK *= -1 
        }
        
        if (this.j > width - 50 || this.j < 50){
            this.incrementJ *= -1
        }

        if (this.w > height - 50 || this.w < 50){
            this.incrementW *= -1 
        }
        
    }   
}

//settings per kenny

function Kenny(e,f,size) {
  
  this.e = random(500,0);
  this.f = random(500,0);
  this.incrementE = 0.3;
  this.incrementF = 0.3;
  this.size = 65;
  
  this.display = function () {
    
    imageMode(CENTER);
    push();
    tint(255,opac);
    image(img2, this.e, this.f, this.size, this.size);
    pop();
  }
  
  this.move = function () {
    
    this.e += this.incrementE;
    this.f += this.incrementF;
    
     if (this.e > width - this.size || this.e < this.size){
            this.incrementE *= -1
        }

        if (this.f > height - this.size || this.f < this.size){
            this.incrementF *= -1
        }
        
      if(keyIsPressed) {
        opac = 0;
        opac2 = 255;
        image(img6,this.e,this.f,70,80);
      } else {
        opac = 255;
        opac2 = 0;
      }
    }
}