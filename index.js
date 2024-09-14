let homeStoreEl =document.getElementById("home-score")
let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}


