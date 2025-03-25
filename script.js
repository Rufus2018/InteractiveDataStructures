let array = [];
let isSorting = false;

function generateArray() {
    if (isSorting) return;  // Prevent generating a new array while sorting
    array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    displayArray();
}

function displayArray() {
    const container = document.getElementById("bar-container");
    container.innerHTML = "";  // Clear the container

    array.forEach((value, index) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;  // Scale for visibility
        container.appendChild(bar);
    });
}

async function bubbleSort() {
    if (isSorting) return;  // Prevent multiple sorts at the same time
    isSorting = true;
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await new Promise(resolve => setTimeout(resolve, 100)); // Pause for animation

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
                displayArray();
            }

            bars[j].style.backgroundColor = "steelblue";
            bars[j + 1].style.backgroundColor = "steelblue";
        }
    }

    isSorting = false;
}
