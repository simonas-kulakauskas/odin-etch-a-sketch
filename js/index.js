// Select container div that we will be adding all the other divs to.
const containerDiv = document.querySelector("#container");
let squaresPerSide = 16;

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


const changeDivColor = (selection) => {
    //let selectedDiv = document.getSelection(selection);
    let selectedDiv = selection["target"];
    selectedDiv.style.cssText = "background-color: red;"
}

const colDivs = document.getElementsByClassName("col")


for (let i = 0; i < colDivs.length; i++) {
    colDivs[i].addEventListener("click", changeDivColor);
}

