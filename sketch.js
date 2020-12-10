var dog,happyDog
var database
var foods,foodStock
function preload()
{
dog_img=loadImage("images/dogImg.png")
happyDog_img=loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,350)
  dog.addImage("dog",dog_img)
  happyDog=createSprite(250,350);
  happyDog.visible=(false)
  happyDog.scale=0.2
  happyDog.addImage("happyDog",happyDog_img)
  dog.scale=0.2
  database = firebase.database();
 foodStock=database.ref('Food')
 foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
if (keyWentDown(UP_ARROW)){
  writeStock(foods);
 happyDog.visible=(true)
 dog.visible=(false)

}
if (keyWentUp(UP_ARROW)){
  
 happyDog.visible=(false)
 dog.visible=(true)

}

textSize(17);
fill("red");
  text("Note : to feed the dog press the up arrow key",100,100)
  
  text("Food remaing:"+ foods ,180,60)
}
function readStock(data){
foods=data.val();
}
function writeStock(x){
  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


