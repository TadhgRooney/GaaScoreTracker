let homeScoreBtn = document.getElementById("home-score-btn")
let homeScoreEl = document.getElementById("home-score")

let guestScoreBtn = document.getElementById("guest-score-btn")
let guestScoreEl = document.getElementById("guest-score")

let homeScore =0
let guestScore = 0

function incrementGuestScore(){
  guestScore+=1
  guestScoreEl.textContent = guestScore

}

function incrementHomeScore(){
  homeScore+=1
  homeScoreEl.textContent=homeScore
}