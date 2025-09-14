// Smooth accordion animation
document.querySelectorAll("details").forEach((el) => {
  el.addEventListener("toggle", () => {
    if (el.open) {
      el.animate([{ height: "0px" }, { height: el.scrollHeight + "px" }], {
        duration: 300,
        easing: "ease-out",
      });
    }
  });
});
