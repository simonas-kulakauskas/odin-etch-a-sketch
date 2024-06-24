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


const changeDivColor = (selection) => { // Fires when selection is clicked
    //let selectedDiv = document.getSelection(selection);
    let selectedDiv = selection["target"];
    selectedDiv.style.cssText = "background-color: red;"
}


const colDivs = document.getElementsByClassName("col")
for (let i = 0; i < colDivs.length; i++) {
    colDivs[i].addEventListener("click", changeDivColor);
}

/* // TODO: LIST
 *  1.❎ Get boxes to flex and resize properly, no matter how many boxes are used.
    2.❎ Changed from a 'click' event to a 'mouseover' (hover) event to draw whenever mouse is above it.
    3.❎ Add a button at the top of the screen to prompt the user with how many squares they want per side.
        a. Once entered, should remove the old grid and add new with the same total space as previously.
        (TIP) : User input limit should be 100 as larger number sequences may cause delays and freezing.

    ! Challenge 1: ❎
        - Randomise RGB values for each interaction to change the color randomly.
    ! Challenge 2: ❎
        - Implement a progressive darkening effect where it darkens each square by 10% each time it's pressed.
*/