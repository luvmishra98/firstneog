var readline=require("readline-sync");
var score;
function play(question,answer){

  score=0;
responce=readline.question(question);

if (responce==answer){
// console.log("VOILA !!! You are correct!");
score++;


}else{

  score--;
}
return score;

}
var a=play("What is his full name? ","Love Mishra");
var b=play("What is his age? ","22");
var c=play("What does he want to become ? ","Full Stack Developer");



console.log( "Your Score is :"+""+(a+b+c));