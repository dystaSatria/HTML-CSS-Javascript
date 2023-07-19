var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0 ;
hole.addEventListener('animationiteration', () => {
    //set the random wall
    var random = Math.random()*3;
    var top = (random*100) + 150;
    hole.style.top = -(top) + "px";
    counter++;
});

setInterval(function(){

    //character always down 
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping==0){
    character.style.top = (characterTop+3)+"px";
}

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    //last section
    if ((characterTop > 480)|| ((blockLeft<20)&&(blockLeft>-50)&&((cTop < holeTop)||(cTop>holeTop+130)))){//holeTop : 150 -40(character height so we minus with it.) = 110
        alert("Don't Worry, play again :) \nYour Score\n"+ counter);
        character.style.top = 100+"px";
        counter=0;
    }

},10);

function jump(){
 jumping = 1;
 let jumpCount = 0;
 var jumpInterval = setInterval (function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if ((characterTop>6)&&(counter<15)){
    
    character.style.top = (characterTop-5)+ "px";
    }

    if (jumpCount>20){
        clearInterval(jumpInterval);
        jumping=0;
        jumpCount = 0;
    }
    jumpCount++;
 },10);

}