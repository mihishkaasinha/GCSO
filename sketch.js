//Author : Mihishkaa Sinha
//the purpose of this game is to help the car safety organisation to create an test that can detect the level of the car crash.

//declare all the global variables
var car, car_img, wall, wall_img;
var speed, weight;

//create the function preload witch loades all the images
function preload()
{
  car_img = loadImage("car image.jpg");
  red_car = loadImage("red car.jpg");
  green_car = loadImage("green car img.jfif");
  yellow_car = loadImage("yellow car.jfif");
  wall_img = loadImage("wall_img.jfif");
  game_sound = loadSound("BMW+DRIVEBY.mp3");
  alert_sound = loadSound("Car+Alarm.mp3");
}

//create the function setup
function setup()
{
  createCanvas(1300, 400);

  //define the speed and weight variable
  speed = random(55, 90);
  weight = random(400, 1200);

  //create the car
  car = createSprite(50, 200, 30, 30);
  car.addImage("car", car_img);
  car.scale = 0.8;
  car.velocityX = speed;

  //create the wall
  wall = createSprite(1200, 200, 50, height / 2);
  wall.addImage("wall", wall_img);

  game_sound.play();
}

//create the function draw
function draw()
{
  background("black");

  if(wall.x - car.x < (car.width + wall.width) / 2)
  {
    car.velocityX = 0;
    
    //define a variable for the formula
    var deformation = 0.5 * weight * speed * speed / 22509;

    if(deformation > 180)
    {
      car.addImage("red", red_car)
      car.changeImage("red", red_car);
      alert_sound.play();
    }

    if(deformation < 180 && deformation > 100)
    {
      car.addImage("yellow", yellow_car)
      car.changeImage("yellow", yellow_car);
      alert_sound.play();
    }

    if(deformation < 100)
    {
      car.addImage("green", green_car)
      car.changeImage("green", green_car);
      alert_sound.play();
    }

  }

  drawSprites();
}