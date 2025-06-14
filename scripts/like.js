document.addEventListener("DOMContentLoaded", function () {
    const unliked = Array.from(document.getElementsByClassName('unliked'));
    const liked = Array.from(document.getElementsByClassName('liked'));
    const addToCartButtons = Array.from(document.querySelectorAll(".shop-element-card-button-hover"));

    unliked.forEach((btn, i) => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();

            btn.classList.add("hide");
            liked[i].classList.remove("hide");
        });
    });

    liked.forEach((btn, i) => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();

            btn.classList.add("hide");
            unliked[i].classList.remove("hide");
        });
    });

    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();

            // Тут логіка додавання до кошика
            console.log("Товар додано до кошика");
        });
    });
});
