// Box Creation
const createBoxes = (squaresPerSide = 16) => {
    const container = document.querySelector("#container");
    for (let i = 0; i < squaresPerSide; i++) {
        const div = document.createElement("div");
        div.className = "col";
        for (let j = 0; j < squaresPerSide; j++) {
            const div2 = document.createElement("div");
            div2.className = "box";
            div.appendChild(div2);
        }
        container.appendChild(div);
    }
    attachBoxListeners();
}

// Box colouring functions
const changeBoxColor = (selection) => {
    selection = selection["target"];
    selection.style.cssText = "background-color: black;"
}

const attachBoxListeners = () => {
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", changeBoxColor);
    }
}

// Cleaning Functions
const removeBoxListeners = () => {
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener("mouseover", changeBoxColor);
    }
}

const cleanContainerDiv = () => {
    const container = document.querySelector("#container");
    container.innerHTML = "";
}

// User Prompt Functions
const askForSquaresPerSide = () => {
    // Clean up current session if first run
    if (firstRun === false) {
        removeBoxListeners();
        cleanContainerDiv();
    }

    let userSquaresPerSide = prompt("Enter an amount of Squares (Range 0-100)");
    if (userSquaresPerSide > 100 || userSquaresPerSide < 0) {
        alert("Out of bounds, pick between 0-100");
        askForSquaresPerSide();
    }
    else if (userSquaresPerSide % 1 != 0) {
        alert("Out of bounds, only whole numbers accepted")
        askForSquaresPerSide();
    }
    else {
        firstRun = false;
        createBoxes(userSquaresPerSide);
    }
    
}

// Allow button to be pressed and state that program hasn't been run yet to prevent unneccesary cleaning
let firstRun = true;
const button = document.getElementById("squareSelectionButton");
button.addEventListener("click", askForSquaresPerSide);