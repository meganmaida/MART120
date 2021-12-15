//head
var headX = 300;
var headDirection = 1
//eyes
var blackeyesY = 305
var whiteeyesY = 295
var blackeyesDirection = 3
var whiteeyesDirection = 10
//foot
var footX = 185
var footY = 500
var footDirection = 5
//ball
var ballX = 320
//size
var size = 22;
var count = 0;
var sizeDirection = 2;

var math
var ballDirection = 15

function setup ()
    {
        createCanvas (600, 600);
    }
 function draw ()
    {
     background (200, 245, 330);
     //ground
        fill ("green");
    rect (0, 470, 600, 600);
    //hat
    triangle (320, 30, 192, 200, 400, 200);
    //hatball
        fill ("yellow");
    circle (ballX, 32, 60);
    ballX += ballDirection;
    if(ballX <= 30 || ballX >= 570 )
    {
        ballDirection *= -1
    }
    //head
        fill ("pink");
    ellipse (headX, 350, 280, 320);
    headX += headDirection;
    if(headX <= 140 || headX >= 460 )
    {
        headDirection *= -1
    }
    //rightarm
    ellipse (470, 330, 110, 90);
        fill ("red")
    //rightfoot
    ellipse (420, 500, 110, 95);
    //leftfoot
    ellipse (footX, footY, 110, 95);
    footX += -footDirection
    if(footX <= 125 || footX >= 545 )
    {
        footDirection *= -1
    }
    footY +=footDirection
    if(footY <= 0 || footY >= 0);
    //leftarm
        fill ("pink");
    ellipse (130, 310, 90, 110);
    //hatbase
        fill ("yellow");
    rect (190, 180, 230, 60);
    //righteye
        fill ("black");
    ellipse (330, blackeyesY, 30, 60);
    //lefteye
    ellipse (265, blackeyesY, 30, 60);
        fill ("white");
        blackeyesY += -blackeyesDirection
        if(blackeyesY <= 140 || blackeyesY >= 405 )
        {
            blackeyesDirection *= -1
        }
    //righteyecenter
    ellipse (330, whiteeyesY, 27, 33);
    //lefteyecenter
    ellipse (265, whiteeyesY, 27, 33);
        fill ("black")
        whiteeyesY += whiteeyesDirection;
    if(whiteeyesY <= 140 || whiteeyesY >= 460 )
    {
        whiteeyesDirection *= -1
    }
    //righteyebrow
        rotate(radians(35));
    rect (420,12,7,50);
        rotate(radians(-70));
    //lefteyebrow
    rect (61, 353, 7, 50);
        fill ("maroon");
        rotate(radians(35));
    //mouth
    ellipse (290, 406, 60, 40);
        fill ("#fae")       
    //tongue
    ellipse (290, 415, 40, 20);
    //leftcheek
    ellipse (220, 370, 40, 20);
    //rightcheek
    ellipse (365, 370, 40, 20);
        fill ("gray");
    //sword
    quad (110, 280, 110, 100, 160, 40, 135, 270);
    //vline
    line (118, 280, 140, 85);
    //hline
    line (120, 100, 150, 100);
        fill ("blue");
    //handle
    quad (100, 300, 70, 220, 120, 260, 190, 250);
        fill ("black");
        textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('This is Kirby. Kirby is my spirit animal, therefore, he is my representation of a self portrait', 10, 10, 70);
    text('Megan Maida', 520, 590)
    }
       
     
     
        
