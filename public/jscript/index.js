const header = document.querySelector("header");
const dateYear = document.querySelector("#dateYear");
function close() {
  header.style.display = "none";
}
header.addEventListener("click", function () {
  close();
});
let date = new Date();
date = date.getFullYear();
dateYear.innerHTML = `binance &#169; ${date}`;
