nose_x=0;
nose_y=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup(){
    Canvas=createCanvas(300,300);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    PoseNet=ml5.poseNet(video,modelloaded);
    PoseNet.on('pose',gotposes);

}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
image(clown_nose,nose_x,nose_y,30,30);
//circle(nose_x,nose_y,20);
}

function modelloaded(){
    console.log("poseNet is initilized");
}

function gotposes(results){
     if(results.length>0){
         console.log(results);
         nose_x=results[0].pose.nose.x-12;
         nose_y=results[0].pose.nose.y-12;
         console.log("nose x="+results[0].pose.nose.x);
         console.log("nose y="+results[0].pose.nose.y);
     }
    }
function take_snapshot(){
    save("child.png");
}
 