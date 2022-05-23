const possibleOutcome=["Paper","Scissors","Rock"];
const weapons = document.querySelectorAll(".weapon");

const startGameBtn =document.getElementById("startGame");
const cardContainer =document.querySelector(".card-container");
const outputContainer= document.querySelector(".output-container");
startGameBtn.addEventListener("click",startGame);



startGameBtn.addEventListener("click",startGame);


function startGame(){
    hideElement(startGameBtn)
    showElement(cardContainer);
    showElement(outputContainer);


    weapons.forEach(weapon => {
        weapon.addEventListener("click",playerPlay)
    });
}


function showElement(element){
    element.style.display="flex";
}

function hideElement(element){
    element.style.display="none";
}




//Computer Play 
function computerPlay(){
    console.log(possibleOutcome[random()])
}

function random(){
    return Math.floor(Math.random()*3);
}

