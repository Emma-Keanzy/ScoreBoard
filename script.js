// JavaScript for Basketball Scoreboard

let home = 0;
let guest = 0;

document.getElementById("home-points").textContent = home;
document.getElementById("guest-points").textContent = guest;    

let homeScore = document.getElementById("home-points");
let guestScore = document.getElementById("guest-points");

function updateScore1(){
    home += 1;
    homeScore.textContent = home;
}

function updateScore2(){
    home += 2;
    homeScore.textContent = home;
}

function updateScore3(){
    home += 3;
    homeScore.textContent = home;
}

function updateGuestScore1(){
    guest += 1;
    guestScore.textContent = guest;
}

function updateGuestScore2(){
    guest += 2;
    guestScore.textContent = guest;
}

function updateGuestScore3(){
    guest += 3;
    guestScore.textContent = guest;
}