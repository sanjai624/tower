const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,box2,box3,box4;
var bird;
var rope;
var ball;

function setup() {

  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;
  ground=new Ground(400,height,800,20);
  box1=new Building(600,300,100,100);
  box2=new Building(600,200,100,100);
  box3=new Building(600,100,100,100);
  ball.new ball (200,50);

  
}

function draw() {
  background(255,255,255); 

  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display(); 
  
}