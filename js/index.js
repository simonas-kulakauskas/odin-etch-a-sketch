let firstRun = true;

// Function to create amount of boxes in container based on user input

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

// Function to change color of box that's passed to it.

const changeBoxColor = (selection) => {
    selection = selection["target"];
    selection.style.cssText = "background-color: black;"
}

// Function to attach listeners to each box

const attachBoxListeners = () => {
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", changeBoxColor);
    }
}

// Function to remove listeners from each box

const removeBoxListeners = () => {
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener("mouseover", changeBoxColor);
    }
}

// Function to clean up container div
const cleanContainerDiv = () => {
    const container = document.querySelector("#container");
    container.innerHTML = "";
}

// Function to prompt (& alert user) for squaresPerSide and make sure its a number
const askForSquaresPerSide = () => {
    // Clean up current session if first run
    if (firstRun === false) {
        removeBoxListeners();
        cleanContainerDiv();
    }

    // Prompt user and initiate if valid
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


const button = document.getElementById("squareSelectionButton");
button.addEventListener("click", askForSquaresPerSide);