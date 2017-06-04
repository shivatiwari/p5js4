var balls = [];


function setup()
{
    createCanvas(outerWidth,outerHeight);
    for(var i = 0; i < 100; i++)
    {
       balls[i] = new ball();
    }
}
function draw()
{
   background(0); 
   for(var i = 0; i < balls.length; i++){
    balls[i].move();
    balls[i].bounce();
    balls[i].display();
    }
    if(mouseIsPressed)
    {
        balls.push(new ball(mouseX,mouseY));
    }
    if(balls.length > 200)
        {
            balls.splice(0,1);
        }
    
   
}

function ball(x,y)
{
    this.x =x;
    this.y = y;
    this.xspeed =random(-5,5);
    this.yspeed =random(-5,5);

    this.move = function()
    {
          this.x = this.x + this.xspeed;
          this.y = this.y + this.yspeed;  
    }
    this.display = function()
    {
         stroke(255);
         strokeWeight(4);
         fill(255,0,random(0,200),200);
         ellipse(this.x , this.y , 24 , 24);
    }

    this.bounce = function()
    {
         if(this.x > width || this.x < 0)
        this.xspeed = this.xspeed * -1;
    
    if(this.y > height || this.y <0)
        this.yspeed = this.yspeed * -1;

    }


}


