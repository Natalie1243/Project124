function preload()
{}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.position(900, 200);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(200, 100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
background('#969A97');
}

function modelLoaded() 
{
console.log('Model is loaded');
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    //nose_x
    
}

}

