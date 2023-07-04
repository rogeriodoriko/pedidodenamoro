function moveButton() {
  const simButton = document.querySelector(".button");
  const maxWidth = window.innerWidth - 140;
  const maxHeight = window.innerHeight - 60;
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);
  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}
