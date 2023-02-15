let dayOfMonth = 31
let weekday = "Friday"

if(dayOfMonth==31 && weekday=="Friday"){
            console.log("😑")

}
let hands = ["rock", "paper", "scissor"]
let OneVal=document.getElementById("one")
let TwoVal=document.getElementById("two")

function rps(){
    
    let raV=Math.floor(Math.random()*3)

    OneVal.textContent=hands[raV]
}
function rpss(){
    
    let raV=Math.floor(Math.random()*3)

    TwoVal.textContent=hands[raV]
}


