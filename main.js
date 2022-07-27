x = 0;
y = 0;
var apple = "";
var speak_data="";
var draw_apple = "";
var to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  apple=loadImage("apple.png");
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0, 150);
} 

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

to_number = Number(content);

document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
if(Number.isInteger(to_number))
{
  x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        document.getElementById("status").innerHTML = "Started drawing Apples";
draw_apple = "set";
  }

    
else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number";
}


 
} 

function draw() {
   
  if(draw_apple == "set")
{
  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.random() * 1300);
    y = Math.floor(Math.random() * 400);
    //var apple = document.createElement("apple");
 
    image(apple, x, y, 50, 50);
  }
  document.getElementById("status").innerHTML = to_number + " Apples drawn";
  speak();
  draw_apple = "";
}
  }
 

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
