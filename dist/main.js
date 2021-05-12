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

// About Images

const slideInLeft = document.querySelectorAll(".slide__in--left");

const slideInLeftOptions = {
  rootMargin: "0px 0px -200px 0px",
};

const slideInLeftScroll = new IntersectionObserver((entries, slideInLeftScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("left-appear");
      slideInLeftScroll.unobserve(entry.target);
    }
  });
}, slideInLeftOptions);

slideInLeft.forEach((slide) => {
  slideInLeftScroll.observe(slide);
});

const slideInRight = document.querySelectorAll(".slide__in--right");

const slideInRightOptions = {
  rootMargin: "0px 0px -200px 0px",
};

const slideInRightScroll = new IntersectionObserver((entries, slideInRightScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("right-appear");
      slideInRightScroll.unobserve(entry.target);
    }
  });
}, slideInRightOptions);

slideInRight.forEach((slide) => {
  slideInRightScroll.observe(slide);
});

// Testimonial Cards

const dropIn = document.querySelectorAll(".drop__in");

const dropInOptions = {
  rootMargin: "0px 0px -200px 0px",
};

const dropInScroll = new IntersectionObserver((entries, dropInScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("drop-appear");
      dropInScroll.unobserve(entry.target);
    }
  });
}, dropInOptions);

dropIn.forEach((drop) => {
  dropInScroll.observe(drop);
});
