// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// x and y for a shape2
var shape2X = 30;
var shape2Y = 50;
var shape2XSpeed;
var shape2YSpeed;

//square
var squareX = 20
var squareDirection = 2

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    createBackground();
    createCharacter();
    exitmessage();
    createMaze();
    keyPress();
    createEnemy1();
    createEnemy2();
    characterExit();
    createRedsquare();
    mouseClick();

    
function createCharacter()
{
    //character
    fill(20,90,10);
    circle(characterX,characterY,25);
}
function createBackground()
{
    background(100,31,206);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);
}
function exitmessage()
{
     // exit message
     textSize(16);
     text("EXIT", width-50,height-50)
}
function createMaze()
{
     //maze
     fill ("black")
     line (80, 80, 80, 120)
     line (80, 80, 500, 80)
     line (80, 120, 460, 120)
     line (460, 120, 460, 200)
     line (460, 200, 200, 200)
     line (200, 200, 200, 350)
     line (500, 240, 240, 240)
     line (240, 240, 240, 350)
     line (200, 350, 0, 350)
     line (240, 350, 500, 350)
     line (260, 390, 0, 390)
     line (300, 390, 500, 390)
     line (300, 390, 300, 560)
     line (260, 390, 260, 600)
     line (300, 560, 500, 560)
}
function keyPress()
{
     // handle the keys
     if(keyIsDown(w))
     {
         characterY -= 1;   
     }
     if(keyIsDown(s))
     {
         characterY += 1;   
     }
     if(keyIsDown(a))
     {
         characterX -= 1;   
     }
     if(keyIsDown(d))
     {
         characterX += 1; 
     }
}
function createEnemy1()
{
    // potential enemy
    fill(1,145,204);
    // draw the shape
    circle(shapeX, shapeY,35);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
}
function createEnemy2()
{
    // potential enemy 2
    fill(1,145,204);
    // draw the shape
    circle(shape2X, shape2Y,35);

     // get a random speed when the it first starts
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shape2X -= shape2XSpeed;
    shape2Y += shape2YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
}
function characterExit()
{
    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill("black");
        stroke(5);
        textSize(40);
        text("You Won!", width/40, height/2-50);
    }
}
function createRedsquare()
{
    fill ("red")
    square (squareX, 360, 20)
    squareX += squareDirection
    if (squareX >=540)
    squareX=20
}
function mouseClick()
{
     // create the shape based on the mouse click
     fill(50,530,100);
     circle(mouseShapeX, mouseShapeY, 65);
}

}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
