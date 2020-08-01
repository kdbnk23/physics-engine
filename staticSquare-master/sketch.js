const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var ball;
var ball2; 
var ball3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ball_options={
        restitution:1
    }
    var ball_option={
        restitution:0.8
    }
    ball2= Bodies.circle(100,200,20,ball_options);
    ball = Bodies.circle(200,200,20,ball_options);
    ball3=Bodies.circle(300,200,20,ball_option)
    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    World.add(world,ball);
    World.add(world,ball2)
    World.add(world,ball3)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    ellipseMode(RADIUS)
    ellipse(ball2.position.x,ball2.position.y,20,20)
    ellipseMode(RADIUS)
    ellipse(ball3.position.x,ball3.position.y,20,20)
}