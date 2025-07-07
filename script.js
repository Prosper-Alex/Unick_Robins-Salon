document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (event) => event.preventDefault());
});
