// Select container div that we will be adding all the other divs to.
const containerDiv = document.querySelector("#container");
let squaresPerSide = 0;

function drawSquare(squaresPerSide) {
    // Creates chosen amount of div boxes as rows & cols
    for (let i = 0; i < squaresPerSide; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        for (let j = 0; j < squaresPerSide; j++) {
            const colDiv = document.createElement("div");
            colDiv.className = "col";
            rowDiv.appendChild(colDiv);
        }
        containerDiv.appendChild(rowDiv);
    }


    const changeDivColor = (selection) => { // Fires when selection is clicked
        //let selectedDiv = document.getSelection(selection);
        let selectedDiv = selection["target"];
        selectedDiv.style.cssText = "background-color: red;"
    }


    const colDivs = document.getElementsByClassName("col")
    for (let i = 0; i < colDivs.length; i++) {
        colDivs[i].addEventListener("mouseover", changeDivColor);
    }
}

function cleanUpSquares() {
    containerDiv.innerHTML = '';
}

const userPromptButton = document.getElementById("userPromptButton");

function askUser() {
    userPromptButton.addEventListener("click", () => {
        cleanUpSquares();
        let userChoice = prompt("Select Square's per side! : ");
        if (userChoice <= 100) {
            drawSquare(userChoice);
        } else {
            alert("Not valid. Try again")
        }
    });
}
askUser();
