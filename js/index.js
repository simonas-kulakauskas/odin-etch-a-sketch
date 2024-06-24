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
