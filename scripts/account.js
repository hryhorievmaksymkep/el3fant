const accountInfo = document.getElementById("accountInfo");
const accountCart = document.getElementById("accountCart");
const accountWishlist = document.getElementById("accountWishlist");

accountInfo.addEventListener("click", () =>{
    document.getElementsByClassName("account-info")[0].classList.add("hide");
    document.getElementsByClassName("account-cart")[0].classList.add("hide");
    document.getElementsByClassName("account-wishlist")[0].classList.add("hide");
    document.getElementsByClassName("account-info")[0].classList.remove("hide");
});

accountCart.addEventListener("click", () =>{
    document.getElementsByClassName("account-info")[0].classList.add("hide");
    document.getElementsByClassName("account-cart")[0].classList.add("hide");
    document.getElementsByClassName("account-wishlist")[0].classList.add("hide");
    document.getElementsByClassName("account-cart")[0].classList.remove("hide");
});

accountWishlist.addEventListener("click", () =>{
    document.getElementsByClassName("account-info")[0].classList.add("hide");
    document.getElementsByClassName("account-cart")[0].classList.add("hide");
    document.getElementsByClassName("account-wishlist")[0].classList.add("hide");
    document.getElementsByClassName("account-wishlist")[0].classList.remove("hide");
});