
var readline=require("readline-sync");
var arr=new Array();
console.log("Enter five grocery items :")
for (var i=0;i<5;i++){
  arr[i]=readline.question("Enter "+i+" item ");
  
}
console.log("Grocery Items are :")
for(var j=0;j<5;j++){
  console.log(arr[j]);
}