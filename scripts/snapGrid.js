const grid = document.querySelector(".shop-page-grid-list");

const gridButtons = {
  "3-3": document.querySelector(".snap-grid-3-3"),
  "4-3": document.querySelector(".snap-grid-4-3"),
  "2-4": document.querySelector(".snap-grid-2-4"),
  "1-4": document.querySelector(".snap-grid-1-4")
};

function setGridLayout(layout) {
  grid.classList.remove("grid-3-3", "grid-4-3", "grid-2-4", "grid-1-4");
  grid.classList.add("grid-" + layout);
  
  for (let key in gridButtons) {
    gridButtons[key].style.background = "#fff";
  }
  gridButtons[layout].style.background = "#E8ECEF";
}

// Прив'язуємо функції до кнопок
gridButtons["3-3"].addEventListener("click", () => setGridLayout("3-3"));
gridButtons["4-3"].addEventListener("click", () => setGridLayout("4-3"));
gridButtons["2-4"].addEventListener("click", () => setGridLayout("2-4"));
gridButtons["1-4"].addEventListener("click", () => setGridLayout("1-4"));


//like
for (let i = 0; i < Array.from(document.getElementsByClassName('unliked')).length; i++) {
    Array.from(document.getElementsByClassName('unliked'))[i].addEventListener("click", () => {
        Array.from(document.getElementsByClassName('liked'))[i].classList.remove("hide");
        Array.from(document.getElementsByClassName('unliked'))[i].classList.add("hide");
    });

    Array.from(document.getElementsByClassName('liked'))[i].addEventListener("click", () => {
        Array.from(document.getElementsByClassName('unliked'))[i].classList.remove("hide");
        Array.from(document.getElementsByClassName('liked'))[i].classList.add("hide");
    });
}

//handle screen change
function screenChange(width){
  if (width.matches) {
    setGridLayout("2-4");
  } else {
    setGridLayout("4-3");
  };
  };
  const mediaQuery = window.matchMedia("(max-width: 1440px)");
  mediaQuery.addEventListener("change", screenChange);

screenChange(mediaQuery);
