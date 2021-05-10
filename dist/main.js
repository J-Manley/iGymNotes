const navBar = document.querySelector("#navBar");
const hero = document.querySelector(".hero__content");

const navOptions = {
  rootMargin: "-650px 0px 0px 0px",
};

const navObserver = new IntersectionObserver((entries, navObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("navBar--scrolled");
    } else {
      navBar.classList.remove("navBar--scrolled");
    }
  });
}, navOptions);

navObserver.observe(hero);

const faders = document.querySelectorAll(".fade-in");

const fadeInOptions = {
  rootMargin: "0px 0px -200px 0px",
};

const fadeInScroll = new IntersectionObserver((entries, fadeInScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      fadeInScroll.unobserve(entry.target);
    }
  });
}, fadeInOptions);

faders.forEach((fader) => {
  fadeInScroll.observe(fader);
});
