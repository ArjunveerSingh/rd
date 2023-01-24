nx=0;
ny=0;
d=0;
lwx=0;
rwx=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(500,500);
    canvas.position(560,150);

    posenet= ml5.poseNet(video,ml)
    posenet.on('pose',gr);
}

function ml(){
    console.log("Model Loaded!!");

}

function gr(results){
if(results.length>0){
console.log(results);
nx=results[0].pose.nose.x;
ny=results[0].pose.nose.y;
lwx=results[0].pose.leftWrist.x;
rwx=results[0].pose.rightWrist.x;
console.log(lwx);
console.log(rwx);
d=floor(rwx-lwx);
}
}

function draw(){
    background("grey");
document.getElementById("size").innerHTML="Width and Height of the Square will be"+d+"px";
fill("pink");
square(nx,ny,d);
}
