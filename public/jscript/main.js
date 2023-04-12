const close = document.querySelector(".close");
const cont = document.querySelector(".subclose");
function hideHeader() {
  document.querySelector("header").classList.add("hide");
}
close.addEventListener("click", function () {
  hideHeader();
});
cont.addEventListener("click", function () {
  hideHeader();
});
const date = new Date();
document.querySelector("#dateYear").innerHTML = (`binance &#169; ${date.getFullYear()}`);