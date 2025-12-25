const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const title = document.getElementById("title");
const text = document.getElementById("text");

openBtn.addEventListener("click", () => {
  closeBtn.style.display = "block";
  title.style.display = "none";
  openBtn.style.display = "none";
  text.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  title.style.display = "block";
  text.style.display = "none";
  openBtn.style.display = "block";
});
