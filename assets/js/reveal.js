document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".animation_opacity", {
    duration: 1500,
    opacity: 0,
  });
  ScrollReveal().reveal(".animation_left", {
    duration: 1000,
    opacity: 0.2,
    origin: "left",
    distance: "1rem",
  });
  ScrollReveal().reveal(".animation_list_left .link", {
    interval: 200,
    opacity: 0,
    origin: "left",
    distance: "1rem",
    duration: 500,
  });
  ScrollReveal().reveal(".animation_list_left_footer > div", {
    interval: 200,
    opacity: 0,
    origin: "left",
    distance: "1rem",
    duration: 500,
  });
});
