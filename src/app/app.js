console.log("yoo what up pal?");

const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

const checkVisibilty = () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
  }

  console.log(visibility);
};

navToggle.addEventListener("click", checkVisibilty);
