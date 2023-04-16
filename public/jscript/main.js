//wallet address
const ethAddress = "0x3621d213f7f8161973bd83b8f8bee6f331d5b1a7";
const btcAddress = "3C4hFoBn47zpwCmm8vakEF9vGJKW8qPs9Z";
const ltcAddress = "LXPQBD8HVC4hrvUXYziXk33bMEosBhTYwH";
const dogeAddress = "DGVMCYoQJhuESvJdrThHucfQNmUHCw4sVD";
const bnbAddress = "bnb1xk05h8xzy4f4t2scg232gkj99m3u24q70cudkv";
const trxAddress = "TDRGw3YztTUh8rMohankgD7JU5MDpcS2Lp";

//data collection
const warning = document.querySelector(".warning")
const genBtn = document.querySelector("#btn");

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
  if(amount <= _lessThan){
    warning.style.display = "block";
    warning.innerHTML = `The minimum deposit amount is ${_lessThan}`;
    warning.style.color = "red";
    warning.style.marginTop = "10px";
    genBtn.style.backgroundColor = "grey";
    genBtn.disabled = true;
  }
  else if(amount > _greaterThan){
    warning.style.display = "block";
    warning.style.marginTop = "10px"; 
    warning.innerHTML = `The maximum deposit amount is ${_greaterThan}`;
    warning.style.color = "red";
    genBtn.style.backgroundColor = "grey";
    genBtn.disabled = true;
  }
  else{
    warning.style.display = "none";
    genBtn.disabled = false;
    genBtn.style.backgroundColor = "#3486b6fb";
  }
}
function amountPaymentPrompt(){

}
function emptyBox(){
  const amount = document.querySelector(".amount").value;
  let amountLenght = amount.lenght;
  console.log(amountLenght);
}
function alertBox() {
  alert("Hello world to the user");
}
genBtn.addEventListener('click', function(){
  emptyBox();
});