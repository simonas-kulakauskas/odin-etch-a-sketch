// Select container div that we will be adding all the other divs to.
const containerDiv = document.querySelector("#container");

// Creates 16 div boxes as rows
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let j = 0; j < 16; j++) {
        const colDiv = document.createElement("div");
        colDiv.className = "col";
        rowDiv.appendChild(colDiv);
    }
    containerDiv.appendChild(rowDiv);
}

