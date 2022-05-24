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

   let winner = document.querySelector(".winner");
   let currentRound =document.getElementById("round");
   let userScore =document.querySelector(".userScore");
   let computerScore=document.querySelector(".computerScore");

   let computerWeapon=computerPlay();
   let userWeapon=userPlay();
   currentRound.textContent=parseInt(currentRound.textContent)+1;
   winner.textContent=checkWeapons(userWeapon,computerWeapon);



   if(winner.textContent==="Computer Wins!"){
    computerScore.textContent=parseInt(computerScore.textContent)+1;
   } 
   else if(winner.textContent==="Player Wins!"){
    userScore.textContent=parseInt(userScore.textContent)+1;
   }
   
}

//Should Take first userWeapon than ComputerWeapon
function checkWeapons(weapon1,weapon2){
    if(weapon1===weapon2){
        return "Tie";
    }
    else if(weapon1==="Rock"&&weapon2==="Scissors"){
        return "Player Wins!";
    }
    else if(weapon1==="Paper"&& weapon2==="Rock"){
        return "Player Wins";
    }
    else if(weapon1==="Scissors"&& weapon2==="Paper"){
        return "Player Wins!";
    }
    else{
        return "Computer Wins!";
    }
}

function whoIsWinner(winner){

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

