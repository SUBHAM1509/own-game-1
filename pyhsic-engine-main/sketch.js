var STARTER=1
var STORY=2
var STORY1=3
var STORY2=4
var STORY3=5
var STORY4=6
var STORY5=7
var STORY6=8
var STORYEND=9
var TALK=10
var TALK1=11
var TALK2=12
var TALK3=13
var TALK5=14
var TALK6=15



gameState=STARTER



var flag,flagImage 
var gamebannerImage
var gameBanner
var hulkImage,sadImage
var dialog1,dialog2,dialog3,dialog4,dialog5,dialog6,dialog7
var dialog1Image,dialog2Image,dialog3Image,dialog4Image,dialog5Image,dialog6Image,dialog7Image
var commissinerdialog1,commissinerdialog2,commissinerdialog3,commissinerdialog4
var commissinerdialog1Image,commissinerdialog2Image,commissinerdialog3Image,commissinerdialog4Image


function preload() {
flagImage=loadImage("flag.png")
gamebannerImage=loadImage("wallpaper.jpg")
hulkImage=loadImage("shaktiman.png")
sadImage=loadImage("sad.png")

dialog1Image=loadImage("conversations/hulk/conversationbox(1).png")
dialog2Image=loadImage("conversations/hulk/conversationbox(2).png")
dialog3Image=loadImage("conversations/hulk/conversationbox(3).png")
dialog4Image=loadImage("conversations/character/conversationbox(1).png")
dialog5Image=loadImage("conversations/character/conversationbox(2).png")
dialog6Image=loadImage("conversations/character/conversationbox(3).png")
dialog7Image=loadImage("ENDOFSTORY.png")

commissinerdialog1Image=loadImage("conversations/commisiner/conversationbox(commisiner1).png")
commissinerdialog2Image=loadImage("conversations/commisiner/conversationbox(commisiner2).png")
commissinerdialog3Image=loadImage("conversations/commisiner/conversationbox(commisiner3).png")
commissinerdialog4Image=loadImage("conversations/commisiner/conversationbox(commisiner4).png")
}







function setup() {
  createCanvas(800,400);


  gameBanner=createSprite(400,200)
  gameBanner.addImage(gamebannerImage)
  gameBanner.scale=0.5


  dialog1=createSprite(600,130)
  dialog1.addImage(dialog1Image)

  dialog2=createSprite(600,130)
  dialog2.addImage(dialog2Image)

  dialog3=createSprite(600,130)
  dialog3.addImage(dialog3Image)

  dialog4=createSprite(200,130)
  dialog4.addImage(dialog4Image)

  dialog5=createSprite(200,130)
  dialog5.addImage(dialog5Image)

  dialog6=createSprite(200,130)
  dialog6.addImage(dialog6Image)
 
  dialog7=createSprite(250,170) 
  dialog7.addImage(dialog7Image)
  dialog7.scale=0.9

  commissinerdialog1=createSprite(400,200)
  commissinerdialog1.addImage(commissinerdialog1Image)
  }
    
   
   
    function draw() {
      background("blue");  






  drawSprites()

  if(gameState===STARTER) {
    stroke("white")
    fill("red")
    textSize(30)
    text("PRESS 1 TO READ STORY",300,30)


 
  dialog1.visible=false
  dialog2.visible=false
  dialog3.visible=false
  dialog4.visible=false
  dialog5.visible=false
  dialog6.visible=false
  dialog7.visible=false
  commissinerdialog1.visible=false

  if(keyDown("1")) {
    gameState=STORY
  }
  
  
}
else if(gameState===STORY) {
       
  HULK();
  
  dialog1.visible=true
  gameBanner.destroy()
         
 if(keyDown("N")) {
   gameState=STORY2
  
 }
}
else if(gameState===STORY2) {
  dialog1.visible=false
  dialog2.visible=false
  dialog4.visible=true
  dialog5.visible=false
  dialog6.visible=false
 
  if(keyDown("M")) {
  gameState=STORY3
  
}
 
}
else if(gameState===STORY3) {
  dialog1.visible=false
  dialog4.visible=false
  dialog2.visible=true
  dialog6.visible=false
  if(keyDown("P")) {
    gameState=STORY4
  }
}
else if(gameState===STORY4) {
  dialog1.visible=false
  dialog2.visible=false
  dialog4.visible=false
  dialog5.visible=true
  dialog6.visible=false
 
  if(keyDown("o")) {
    gameState=STORY5
  }
}
else if(gameState===STORY5) {
  dialog1.visible=false
  dialog2.visible=false
  dialog4.visible=false
  dialog5.visible=false
  dialog3.visible=true
  if(keyDown("y")) {
    gameState=STORY6
  }
}
else if(gameState===STORY6) {
  dialog1.visible=false
  dialog2.visible=false
  dialog4.visible=false
  dialog5.visible=false
  dialog3.visible=false
  dialog6.visible=true
 
if(keyDown("f")) {
  gameState=STORYEND
}

}
else if(gameState=STORYEND) {
  dialog1.visible=false
  dialog2.visible=false
  dialog3.visible=false
  dialog4.visible=false
  dialog5.visible=false
  dialog6.visible=false
  dialog7.visible=true
if(keyDown("a")) {
  gameState=TALK  
}

}
else if(gameState===TALK) {
  dialog1.visible=false
  dialog2.visible=false
  dialog3.visible=false
  dialog4.visible=false
  dialog5.visible=false
  dialog6.visible=false
  dialog7.visible=false
  commissinerdialog1.visible=true


}

}




function Flag() {
  flag=createSprite(400,365,50,50)
 flag.addImage(flagImage)
 flag.scale=0.3
}

function HULK (){
  var hulk=createSprite(730,300,100,100)
  hulk.addImage(hulkImage)
  hulk.scale=0.9

  sad=createSprite(60,300,100,100)
  sad.addImage(sadImage)
  sad.scale=0.7
}