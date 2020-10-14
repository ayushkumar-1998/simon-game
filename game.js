var userClickedPattern=[];
var level=0;
var started=false;
var gamePattern=[];
var buttonColors=["red","blue", "green", "yellow"];
$(".btn").on("click",function(){
   var userChosenColor=this.id;
   userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
   checkAnswer(userClickedPattern.length-1);
   });
function checkAnswer(currentAnswer){
  if(gamePattern[currentAnswer]===userClickedPattern[currentAnswer])
  {
    console.log("success");

  if(gamePattern.length===userClickedPattern.length){
    setTimeout(function(){nextSequence();},1000);
    console.log(gamePattern.length)
  }}
  else{
    console.log(wrong);
    var wrong= new Audio("sounds/wrong.mp3");
    wrong.play();
    var game= $(".body").addClass("game-over");
    setTimeout(function(){game.removeClass("game-over");},300);
    $("#level-title").html("Game over, Press any key to restart");
    startOver();

  }

}

$(document).on("keypress",function(){
  if(!started){
nextSequence();
  $("#level-title").html("level"+" "+level);
  started=true;}
});
function startOver(){
  started=false;
  gamePattern=[];
  level=0;

}
function animatePress(currentColor){
  var k=$("#"+currentColor).addClass("pressed");
  setTimeout(function(){k.removeClass("pressed")},100);

}
function nextSequence(){
  userClickedPattern=[];
  level++;
    $("#level-title").text("Level " + level);
  var randomNumber=Math.round(Math.random()*3);
  var randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+ randomChosenColor).fadeOut(100).fadeIn(100);
  var audio=new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();


}
function playSound(colorName){
  switch(colorName){
    case "red":
        var red=new Audio("sounds/red.mp3");
        red.play();
   case "green":
        var green=new Audio("sounds/green.mp3");
        green.play();
    case "blue":
        var blue=new Audio("sounds/blue.mp3");
        blue.play();
        case "yellow":
        var yellow=new Audio("sounds/yellow.mp3");
        yellow.play();


  }
}
