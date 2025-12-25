const boxes = document.querySelectorAll(".box");
let turn = "❌";
let gameOver = false;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && !gameOver) {
            box.innerText = turn;
            checkWinner();
            turn = turn === "❌" ? "⭕" : "❌";
        }
    });
});

function checkWinner() {
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;

        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            alert(`${boxes[a].innerText} wins! 🎉`);
            gameOver = true;
        }
    });
}
