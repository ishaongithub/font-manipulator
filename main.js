function setup(){
    video=createCapture(VIDEO);
    video.size(600,650);
    video.position(100,65);
    canvas=createCanvas(600,460);
    canvas.position(701,160);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    background('#B3FF9E')
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
}
}