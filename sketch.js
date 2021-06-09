const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is ther
    if(backgroundImg)
     background(backgroundImg)

    Engine.update(engine);
    // write code to display time in correct format 
   

} 
    
    async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var  responseType =  await response.json();

    var datetime =  responseType.datetime;
    console.log(datetime)

    var hour = datetime.slice(11,13);
    console.log(hour)
    

    // add conditions to change the background images from sunrise to sunset
    if(hour>=4 && hour<=6){
       bg = "sunrise1.png"
    }
    if(hour>=6 && hour<=8){
        bg = "sunrise2.png"
     }
     if(hour>=8 && hour<=10){
        bg = "sunrise3.png"
     }
     if(hour>=10 && hour<=12){
        bg = "sunrise4.png"
     }
     if(hour>=12 && hour<=14){
        bg = "sunrise5.png"
     }
     if(hour>=14 && hour<=16){
        bg = "sunrise6.png"
     }
     if(hour>=16 && hour<=18){
        bg = "sunset7.png"
     }
     if(hour>=18 && hour<=20){
        bg = "sunset8.png"
     }
     if(hour>=20 && hour<=22){
        bg = "sunset9.png"
     }
     if(hour>=22 && hour<=24){
        bg = "sunset10.png"
     }
     if(hour>=24 && hour<=02){
        bg = "sunset11.png"
     }
     if(hour>=2 && hour<=4){
        bg = "sunset12.png"
     }
     

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}