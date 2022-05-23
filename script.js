const possibleOutcome=["Paper","Scissors","Rock"];
const startGameBtn =document.getElementById("startGame");
const cardContainer =document.querySelector(".card-container");
const outputContainer= document.querySelector(".output-container");
const wearponParagraph =document.querySelectorAll(".weaponText");
const displayCurrentWeapon=document.getElementById("weapon");

startGameBtn.addEventListener("click",startGame);
startGameBtn.addEventListener("click",startGame);


function startGame(){
    hideElement(startGameBtn)
    showElement(cardContainer);
    showElement(outputContainer);


    wearponParagraph.forEach((p)=>{
        p.addEventListener("click",chosenWeapon)
    })
}


function showElement(element){
    element.style.display="flex";
}

function hideElement(element){
    element.style.display="none";
}

function chosenWeapon(e){
    console.log(e.target.textContent)
   let currentWeapon=e.target.textContent;
   displayCurrentWeapon.textContent=currentWeapon
}


//Computer Play 
function computerPlay(){
    console.log(possibleOutcome[random()])
}

function random(){
    return Math.floor(Math.random()*3);
}

