const hamburger = document.querySelector(".hamburger-link");
const link = document.querySelector(".hamburger-link-mobile ");

// monitors the screen for resizing and then turns off the mobile links if its on
window.addEventListener("resize", () => {
  if (screen.width > 941) {
    if (link.getAttribute("used") === "true") {
      link.classList.add("hide");
      link.classList.remove("show");
      link.setAttribute("used", false);
    }
  }
});

// listens to the hamburger to when it has been clicked and then shows or hides the links.
hamburger.addEventListener("click", () => {
  if (link.getAttribute("used") === "false") {
    link.classList.remove("hide");
    link.classList.add("show");
    link.setAttribute("used", true);
  } else {
    link.classList.add("hide");
    link.classList.remove("show");
    link.setAttribute("used", false);
  }
});
