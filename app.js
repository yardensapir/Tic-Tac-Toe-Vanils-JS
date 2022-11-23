// HTML ELEMENTS
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// GAME VARIABLES
let xIsNext = true;

// EVENT HANDLERS
const setCellsColor = (cell, cell2, cell3) => {
  cell.classList.add("winner-cell");
  cell2.classList.add("winner-cell");
  cell3.classList.add("winner-cell");
  for (const cellDiv of cellDivs) {
    cellDiv.classList.add("none");
  }
};

const checkGameStatus = () => {
  const cell1 = cellDivs[0].classList[2];
  const cell2 = cellDivs[1].classList[2];
  const cell3 = cellDivs[2].classList[2];
  const cell4 = cellDivs[3].classList[2];
  const cell5 = cellDivs[4].classList[2];
  const cell6 = cellDivs[5].classList[2];
  const cell7 = cellDivs[6].classList[2];
  const cell8 = cellDivs[7].classList[2];
  const cell9 = cellDivs[8].classList[2];
  const checkWinner = (winner) => {
    if (winner === "x") {
      statusDiv.textContent = `THE WINNER IS X !`;
    } else {
      statusDiv.innerHTML = `<span>THE WINNER IS O !</span>`;
    }
  };

  if (cell1 && cell1 === cell2 && cell1 === cell3) {
    checkWinner(cell1);
    setCellsColor(cellDivs[0], cellDivs[1], cellDivs[2]);
  } else if (cell4 && cell4 === cell5 && cell4 === cell6) {
    checkWinner(cell4);
    setCellsColor(cellDivs[3], cellDivs[4], cellDivs[5]);
  } else if (cell7 && cell7 === cell8 && cell7 === cell9) {
    checkWinner(cell7);
    setCellsColor(cellDivs[6], cellDivs[7], cellDivs[8]);
  } else if (cell1 && cell1 === cell4 && cell1 === cell7) {
    checkWinner(cell1);
    setCellsColor(cellDivs[0], cellDivs[3], cellDivs[6]);
  } else if (cell2 && cell2 === cell5 && cell2 === cell8) {
    checkWinner(cell2);
    setCellsColor(cellDivs[1], cellDivs[4], cellDivs[7]);
  } else if (cell3 && cell3 === cell6 && cell3 === cell9) {
    checkWinner(cell3);
    setCellsColor(cellDivs[2], cellDivs[5], cellDivs[8]);
  } else if (cell1 && cell1 === cell5 && cell1 === cell9) {
    checkWinner(cell1);
    setCellsColor(cellDivs[0], cellDivs[4], cellDivs[8]);
  } else if (cell3 && cell3 === cell5 && cell3 === cell7) {
    checkWinner(cell3);
    setCellsColor(cellDivs[2], cellDivs[4], cellDivs[6]);
  } else if (
    cell1 &&
    cell2 &&
    cell3 &&
    cell4 &&
    cell5 &&
    cell6 &&
    cell7 &&
    cell8 &&
    cell9
  ) {
    statusDiv.textContent = `IT'S A TIED :| `;
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.textContent = `X IS NEXT`;
    } else {
      statusDiv.innerHTML = `<span>O IS NEXT</span>`;
    }
  }
};

const handleReset = () => {
  xIsNext = true;
  statusDiv.textContent = `X IS NEXT`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove("x");
    cellDiv.classList.remove("o");
    cellDiv.classList.remove("winner-cell");
    cellDiv.classList.remove("none");
  }
};
const handleCellClick = (event) => {
  const classList = event.target.classList;

  if (classList.length < 3) {
    if (xIsNext) {
      classList.add("x");
      checkGameStatus();
    } else {
      classList.add("o");
      checkGameStatus();
    }
  }
};

// EVENT LISTENERS
resetDiv.addEventListener("click", handleReset);
for (const celllDiv of cellDivs) {
  celllDiv.addEventListener("click", handleCellClick);
}
