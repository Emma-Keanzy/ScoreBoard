// JavaScript for Basketball Scoreboard

// Initialize score variables for home and guest teams
let home = 0;
let guest = 0;

// Set initial score display on the page
document.getElementById("home-points").textContent = home;
document.getElementById("guest-points").textContent = guest;    

// Get references to the score display elements
let homeScore = document.getElementById("home-points");
let guestScore = document.getElementById("guest-points");

// Function to add 1 point to home score
function updateScore1(){
    home += 1;
    homeScore.textContent = home;
}

// Function to add 2 points to home score
function updateScore2(){
    home += 2;
    homeScore.textContent = home;
}

// Function to add 3 points to home score
function updateScore3(){
    home += 3;
    homeScore.textContent = home;
}

// Function to add 1 point to guest score
function updateGuestScore1(){
    guest += 1;
    guestScore.textContent = guest;
}

// Function to add 2 points to guest score
function updateGuestScore2(){
    guest += 2;
    guestScore.textContent = guest;
}

// Function to add 3 points to guest score
function updateGuestScore3(){
    guest += 3;
    guestScore.textContent = guest;
}