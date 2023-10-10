
function gooseSlaps(){
   var gooseSlap  = new Audio('./GooseSlaps.m4a');
   gooseSlap.play();
}

for (var i = 0 ;
     i<document.getElementsByClassName("btn").length; 
     i++)
     {

document.getElementsByClassName("btn")[i].addEventListener("click", gooseSlaps);}







function gooseKeyboard(){
   var gooseKey = new Audio('./New Recording 2.m4a')
   gooseKey.play();
}

for (var i = 0 ;
     i<document.getElementsByClassName("btn").length; 
     i++)
     {

document.getElementsByClassName("btn")[i].addEventListener("mouseover", gooseKeyboard);}