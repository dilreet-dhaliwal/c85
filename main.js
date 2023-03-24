canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){

    background_imTag= new Image();
    background_imTag.onload=uploadBackground;
    background_imTag.src=background_image;

    rover_imTag=new Image();
    rover_imTag.onload= uploadrover;
    rover_imTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imTag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
up();
console.log("up");
    }
    if(keyPressed=='40')
    {
down();
console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x = "+rover_x+"| y"+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x="+rover_x+"| y"+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x="+rover_x+"| y"+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x="+rover_x +"| y"+rover_y);
        uploadBackground();
        uploadrover();
    }
}
