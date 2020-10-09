canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var rover_x = 10;
var rover_y = 10;
var rover_height = 100;
var rover_width = 100;
rover_image="rover.png";
background_image="mars.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    if(keyPressed =='38'){
        up();
        console.log("up");
    }

    if(keyPressed =='40'){
        down();
        console.log("down");
    }

    if(keyPressed =='37'){
        left();
        console.log("left");
    }

    if(keyPressed =='39'){
        right();
        console.log("right");
    }

}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}