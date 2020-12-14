const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var ball2, ball3, ball4, ball5;
var rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  ground2= new Ground(450,60,600,20)
  

  ball = new Ball(600, 200, 80, 80);
  ball2= new Ball(500, 200, 80, 80);
  ball3= new Ball(400, 200, 80, 80);
  ball4= new Ball(300, 200, 80, 80);
  ball5= new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 600, y: 50 });
  rope2 = new Rope(ball2.body, { x: 500, y: 50 });
  rope3 = new Rope(ball3.body, { x: 400, y: 50 });
  rope4 = new Rope(ball4.body, { x: 300, y: 50 });
  rope5 = new Rope(ball5.body, { x: 200, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  ground2.display();
  

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function KeyPressed() {
  if (KeyIsDown(UP_ARROW)){
    Matter.Body.applyForce(ball2.body, ball2.body.position,{x:200,y:-200});
  }
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball2.body,{x:200,y:100})
}

