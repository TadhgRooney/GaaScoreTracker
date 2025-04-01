let homeGoals = 0;
let homePoints = 0;
let guestGoals = 0;
let guestPoints = 0;

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

function updateScores() {
  const homeTotal = homeGoals * 3 + homePoints;
  const guestTotal = guestGoals * 3 + guestPoints;

  homeScoreEl.textContent = `${homeGoals} - ${homePoints} (${homeTotal})`;
  guestScoreEl.textContent = `${guestGoals} - ${guestPoints} (${guestTotal})`;
}

function incrementHomeScoreGoal() {
  homeGoals += 1;
  updateScores();
}

function incrementHomeScoreTwoPointer() {
  homePoints += 2;
  updateScores();
}

function incrementHomeScorePoint() {
  homePoints += 1;
  updateScores();
}

function incrementGuestScoreGoal() {
  guestGoals += 1;
  updateScores();
}

function incrementGuestScoreTwoPointer() {
  guestPoints += 2;
  updateScores();
}

function incrementGuestScorePoint() {
  guestPoints += 1;
  updateScores();
}

function resetScore() {
  homeGoals = 0;
  homePoints = 0;
  guestGoals = 0;
  guestPoints = 0;
  updateScores();
}

function updateTeams(team,value){
  if(team == 'home'){
    document.getElementById('home-name').textContent = value || 'HOME';
  }else if(team == 'guest'){
    document.getElementById('guest-name').textContent = value || 'GUEST';
  }
}
