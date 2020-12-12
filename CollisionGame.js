
let snail = []; // snail array
let eyes = []; // eyes array
let dir, speed, snailRight, snailLeft;
let size = 10;

function preload(){
	snailRight = loadImage('Assets/SnailRight.png');
	snailLeft = loadImage('Assets/snailLeft.png')
}

function setup(){
	createCanvas(800,600);
	//position the snake in the center of the screen
	snail[0] = [width/2,height/2];
	dir = 1; //direction to start
	speed = 1; //speed
	//poplulate eyes array
		for (let i=0; i< 100; i++) {
			eyes[i] = new Eyes;
		}
}

function draw(){
	background(100);

	if(dir == 1){
		//move left
		moveSnail([snail[0][0]-speed,snail[0][1]]); //snake[0] is always the newXY
	} else if (dir == 2){
		//move right
		moveSnail([snail[0][0]+speed,snail[0][1]]);
		}
	drawSnail();
	fill(0);
		//drawing eyes
	for (let i=0; i< 4; i++) {
		eyes[i].show();
		eyes[i].drops();
		 }
}

function moveSnail(newXY){
	snail[0]=newXY; // filling snail array position 0
}

function drawSnail(){
	if (dir == 2){
	for (let sX = 0; sX < snail.length;sX++){
			image(snailRight,snail[sX][0], (height/3)*2,snailRight.width/2,snailRight.height/2);
			fill(255,0,0, 40);
			noStroke();
			ellipse((snail[sX][0])+194, ((height/3)*2)+15, 20);
			ellipse((snail[sX][0])+235, ((height/3)*2)+12, 20);
			}
		} else if(dir == 1) {
			for (let sX = 0; sX < snail.length;sX++){
					image(snailLeft,snail[sX][0], (height/3)*2,snailLeft.width/2,snailLeft.height/2);
					fill(255,0,0, 40);
					noStroke();
					ellipse((snail[sX][0])+20, ((height/3)*2)+12, 20);
					ellipse((snail[sX][0])+62, ((height/3)*2)+15, 20);
					}
				}
			}

function keyPressed() {
	console.log(key)
//left arrow
  if (key == 'ArrowLeft') {
  	dir = 1;
//right arrow
  } else if (key == 'ArrowRight'){
  	dir = 2;
	}
}

function Eyes () {
	// eyes are spread randomly throughout x/y axis
	this.x = random(0, width);
	this.y = random (0, height)
	this.speed = random (0,1)
	//shows the eyes
	this.show = function () {
		noStroke();
		fill (250); //
		ellipse (this.x, this.y, 24, 24)
		fill (18); //
		ellipse (this.x, this.y, 10, 10)
		}
	// makes the eyes fall and resets each instance once they exceed the height
	this.drops = function () {
		this.y+= 2+this.speed;

		if (this.y> height) {
			this.y = 0;
			this.x = random(0, width);

		}
	}
}
