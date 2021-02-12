// Grab cells and button
var cell = document.querySelectorAll("td");
var restart = document.querySelector("#b");

// Restart game function
function restartGame() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = "";  
    }
}

// Listen for click and restert game
restart.addEventListener("click", restartGame);

// change cell value function
function changeCell(){
    if(this.textContent === ""){
        this.textContent = "X";
    }else if (this.textContent === "X") {
        this.textContent = "O";
    }else{
        this.textContent = "";
    }
}

//Listen for click and change to X, O, empty
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", changeCell);
    
}