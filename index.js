var readline=require("readline-sync");
var decide=readline.question("Are you older then 18");
var score=0;

console.log("You entered "+decide);
if (decide=="yes"){
  console.log("Voila You are "+"right");
  score++;
  console.log("Score is :"+score);
}else{
  console.log("OOH SHIT !!! You are "+"wrong");
    // score++;
  console.log("Score is :"+score);
}