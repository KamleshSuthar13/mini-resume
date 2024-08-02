let hover = document.querySelectorAll(".hover");

hover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.border = "1px solid grey";
    // console.log('Mouse hover');
  });

  element.addEventListener("mouseleave", () => {
    element.style.border = "none";
  });
});

let img = document.querySelector(".photo");

img.addEventListener("mouseenter", () => {
  img.style.transform = "scale(1.1)";
});
img.addEventListener("mouseleave", () => {
  img.style.transform = "none";
});
