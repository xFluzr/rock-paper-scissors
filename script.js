const possibleOutcome=["Paper","Scissors","Rock"];
const startGameBtn =document.getElementById("startGame");
const cardContainer =document.querySelector(".card-container");
const outputContainer= document.querySelector(".output-container");
const wearponParagraph =document.querySelectorAll(".weaponText");
const displayCurrentWeapon=document.getElementById("weapon");
const currentRound = document.getElementById("round");

startGameBtn.addEventListener("click",startGame);
startGameBtn.addEventListener("click",startGame);


function startGame(){
    const fightBtn=document.getElementById("fight");
    hideElement(startGameBtn)
    showElement(cardContainer);
    showElement(outputContainer);

    wearponParagraph.forEach((p)=>{
        p.addEventListener("click",chosenWeapon)
    });


    fightBtn.addEventListener("click",fight)

}


function showElement(element){
    element.style.display="flex";
}

function hideElement(element){
    element.style.display="none";
}

function chosenWeapon(e){
   let currentWeapon=e.target.textContent;
   displayCurrentWeapon.textContent=currentWeapon;
   return currentWeapon;
}

//Computer and player fights
function fight(){
   let computerWeapon=computerPlay();
   let userWeapon=userPlay();
   console.log(computerWeapon)
   console.log(userWeapon)
}


//User play
function userPlay(){
    const currentWeapon=document.getElementById("weapon").textContent;
    return currentWeapon;
}
//Computer Play 
function computerPlay(){
   return possibleOutcome[random()]
}

function random(){
    return Math.floor(Math.random()*3);
}

