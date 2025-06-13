const colorBlack = document.getElementById("product-details-colors-black");
const colorGrey = document.getElementById("product-details-colors-grey");
const colorWhite = document.getElementById("product-details-colors-white");
const colorRed = document.getElementById("product-details-colors-red");
let chosenColor;

function chooseColor(color) {
    colorBlack.classList.remove("product-details-colors-chosen");
    colorGrey.classList.remove("product-details-colors-chosen");
    colorWhite.classList.remove("product-details-colors-chosen");
    colorRed.classList.remove("product-details-colors-chosen");

    color.classList.add("product-details-colors-chosen");

    switch (color) {
        case colorBlack:
            chosenColor = "black";
            break;
        case colorGrey:
            chosenColor = "grey";
            break;
        case colorWhite:
            chosenColor = "white";
            break;
        case colorRed:
            chosenColor = "red";
            break;
        default:
            chosenColor = null;
    }
}

colorBlack.addEventListener("click", () => chooseColor(colorBlack));
colorGrey.addEventListener("click", () => chooseColor(colorGrey));
colorWhite.addEventListener("click", () => chooseColor(colorWhite));
colorRed.addEventListener("click", () => chooseColor(colorRed));

const minus = document.getElementById("product-add-count-minus");
const plus = document.getElementById("product-add-count-plus");
const count = document.getElementById("product-add-count-number");

minus.addEventListener("click", () => {
    let current = parseInt(count.textContent, 10);
    if (current > 1) {
        count.textContent = current - 1;
    }
});
plus.addEventListener("click", () => {
    let current = parseInt(count.textContent, 10);
    count.textContent = current + 1;
});

