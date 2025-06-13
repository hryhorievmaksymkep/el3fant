document.addEventListener("DOMContentLoaded", function () {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!product) {
        document.body.innerHTML = "<p>Товар не знайдено.</p>";
        return;
    }

    document.querySelector(".product-details-title").textContent = product.name;
    document.querySelector(".product-image-placeholder").style.backgroundImage = "url(../" + product.img + ")";
    document.querySelector(".product-details-stars").textContent = product.rate;
    
    if(product.new == true){
        document.querySelector(".shop-element-card-budges-new").classList.remove("hide");
    };
    if(product.discount != null){
        document.querySelector(".shop-element-card-budges-sale").classList.remove("hide");
        document.querySelector(".shop-element-card-budges-sale").textContent = product.discount * 100 + "%";
        document.querySelector(".product-details-old-price").textContent = product.price + "₴";
        document.querySelector(".product-details-new-price").textContent = product.price - (product.price * product.discount) + "₴";
    }
    else{
        document.querySelector(".product-details-old-price").classList.add("hide");
        document.querySelector(".product-details-new-price").textContent = product.price + "₴";
    };

});

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

