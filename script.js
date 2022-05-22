const possibleOutcome=["Paper","Scissors","Rock"];
const weapons = document.querySelectorAll(".weapon");
const playBtn = document.querySelector(".play");

weapons.forEach(weapon => {
    weapon.addEventListener("click",playerPlay)
});

playBtn.addEventListener("click",game);






function playerPlay(){
   console.log(`Player choose`)
}

function game(){
    playerPlay()
    computerPlay()
}


//Computer Play 
function computerPlay(){
    console.log(possibleOutcome[random()])
}

function random(){
    return Math.floor(Math.random()*3);
}

