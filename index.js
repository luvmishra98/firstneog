var supermen={

  height:100,
  name:"supermen salman ka fan",
  color:"red",
  strenth:10
};
var batmen={
  height:120,
  name:"I am the Brother of Padmen !!!",
  color:"black",
  strenth:20
};
// console.log("Color of two SuperPowers is:")
// console.log(supermen.color+" " +batmen.color);
// console.log(supermen.name);
// console.log(batmen.name);
// console.log(batmen.strenth>supermen.strenth);

var herolist=[batmen,supermen];

for (var i=0;i<herolist.length;i++){
  console.log(herolist[i].name);
  console.log("My color is :"+herolist[i].color);
  console.log("*******************")
}