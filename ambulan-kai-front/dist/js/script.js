const infoBtn = document.querySelector(".informasi");

infoBtn.addEventListener("click", function () {
  infoBtn.parentElement.parentElement.nextElementSibling.classList.toggle("hidden");
});
