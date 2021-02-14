const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
var eng,world
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
var ground

function setup() {
  createCanvas(480,800);
  eng=Engine.create()
  world=eng.world
  ground=new Ground(240,790,480,20)
  for (var k=0;k <=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    console.log("hello:)")
  }
  for (j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
    
  }
  for (j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
    
  }
  for (j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,10))
    
  }
  for (j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10))
    
  }
  for (j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,475,10))
    
  }
  console.log(plinkos.length)
}



function draw(){
  background(0);  
  
  Engine.update(eng)

ground.display()
for(var j=0;j<particles.length;j++){
  particles[j].display()
}
for(var k=0;k<divisions.length;k++){
  console.log("hello")
  divisions[k].display()
}

if (frameCount%60==0){
  particles.push(new Particle(random(width/2-80,width/2+80),10,10));

}





for (j=0;j <plinkos.length;j=j+1){
  plinkos[j].display()
}
drawSprites();
}
