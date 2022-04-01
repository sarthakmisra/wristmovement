leftwristX = 0;
rightwristX = 0;
input = "";
difference = 0;
function preload() {

}

function setup() {
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 550);
canvas.position(560,200);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
    background('#99ccff');
    textSize(difference);
    fill('#3399ff');
    text(input, 50, 400);

  
}

function modelLoaded() {
    console.log('Posenet Is Initialised');
    input = document.getElementById("input").value;
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.leftWrist.x;
difference = floor(leftwristX - rightwristX);
    }
}