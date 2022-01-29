
rightWristx=0;
leftWristy=0;
difference=0;


function setup(){
video=createCapture(VIDEO);
video.size(550,550);
canvas=createCanvas(450,450);
canvas.position(560,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
console.log("posenet is iniatilised");

}

function draw(){
background('#ADD8E6');
textSize(difference);
fill('#000000');
text("ARYAN",50,400);
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristx=results[0].pose.leftWrist.x;
rightWristx=results[0].pose.rightWrist.x;
difference=floor(leftWristx - rightWristx);
console.log("difference = " + difference);
console.log("Left Wrist x = " + leftWristx);
console.log("Right Wrist x = " + rightWristx);
}

}

    
