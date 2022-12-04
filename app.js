const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSLideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

// arrow functional
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSLideIndex++;
    if (activeSLideIndex === slidesCount) {
      activeSLideIndex = 0;
    }
  } else if (direction === "down") {
    activeSLideIndex--;
    if (activeSLideIndex < 0) {
      activeSLideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSLideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSLideIndex * height}px)`;
}
