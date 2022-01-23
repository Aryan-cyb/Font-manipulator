nosex=0;
nosey=0;
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
}

function gotPoses(results){
if(results.length>0){
console.log(results);
}

    
}
