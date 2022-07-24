const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const btn = document.querySelector("#tellBtn");
const output = document.querySelector("#output");
const contain = document.querySelector(".container");

function showMessage(message) {
  output.innerText = message;
}

function ProfitLoss() {
  const initialPriceNo = Number(initialPrice.value);
  const currentPriceNo = Number(currentPrice.value);
  const quantityNo = Number(quantity.value);
  if(initialPriceNo && currentPriceNo && quantityNo){
    if (initialPriceNo > currentPriceNo) {
        const Loss = (initialPriceNo - currentPriceNo) * quantityNo;
        LossPercentage = (Loss / initialPriceNo) * 100;
        showMessage(`Hey, the loss is ${Loss} and percent is ${LossPercentage.toFixed(2)}%`);
        document.body.className = "lossClass";
  } else if (initialPriceNo < currentPriceNo) {
        const Profit = (currentPriceNo - initialPriceNo) * quantityNo;
        ProPercentage = (Profit / initialPriceNo) * 100;
        showMessage(`Hey, the profit is ${Profit} and percent is ${ProPercentage.toFixed(2)}%`);
        document.body.className = "profitClass";
  } else {
        showMessage(`No gain no loss`);
        document.body.className = "NoGainClass";
        }
  }
  else{
    showMessage("Please fill all the details");
    output.style.color="red";
  }

}

btn.addEventListener("click", ProfitLoss);
