let video;
let poseNet;
let handX=0;
let handY=0;
let handA=0;
let handB=0;
let tkA=0;
let tkB=0;
let tkX=0;
let tkY=0;
var angle=0;

function setup() {
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelloaded);
  poseNet.on('pose',gotPoses);
}
function modelloaded(){
  console.log('Pose Ready');
}
function gotPoses(poses){
  console.log(poses)
if(poses.length>0){
  handA = poses[0].pose.rightWrist.x;
  handB=poses[0].pose.rightWrist.y;
   handX = poses[0].pose.leftWrist.x;
  handY=poses[0].pose.leftWrist.y;
  tkA =poses[0].pose.leftElbow.x;
  tkB =poses[0].pose.leftElbow.y;
  tkX =poses[0].pose.leftShoulder.x;
  tkY =poses[0].pose.leftShoulder.y;
}
}
function draw(){
  //background(100)
  //image(video,0,0)
  push()
  let b =map(sin(angle),1,-1,10,80)
  
  push()
  fill(b+30)
  strokeWeight(5)
  stroke(b+50,angle*5,b+50)
  translate(tkA,tkY)
  rotate(angle)
        rect(0,0,b,b)
  pop()
  angle+=0.05
  
  push()
  fill(b+180)
  strokeWeight(4)
  stroke(b+180,angle*4,b+180)
  translate(handX,handY)
  rotate(angle)
        rect(0,0,b,b+10)
  pop()
   push()
  fill(b+180)
  strokeWeight(2)
  stroke(b+150,angle*2,b+150)
  translate(handA,handB)
  rotate(angle)
        rect(0,0,b,b+10)
  pop()
  angle+=0.03
 
strokeWeight(3)
  fill(b+180)
  stroke(b+150,b,b+150)
  triangle (tkA, tkB, handX, handY, tkX, tkY)
}