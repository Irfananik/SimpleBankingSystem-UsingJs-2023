document.getElementById('btn-deposit').addEventListener('click', function () {
  // get deposit value from the deposit input field
  const newDepositAmount = getInputFieldValueById('deposit-field')
  const previousDepositTotal = getTextFieldValueById('deposit-total')
  const newDepositTotal = newDepositAmount + previousDepositTotal

  if (newDepositAmount > 0) {
    // set deposit total new amount
    setTextElelmentValueById('deposit-total', newDepositTotal)
  }
  else{
    alert("Please enter a valid deposit amount")
  }

  //set new total amount
  const previousBalanceTotal = getTextFieldValueById('balance-total')
  const newBalanceTotal = previousBalanceTotal + newDepositAmount
  if(newDepositAmount > 0){
    setTextElelmentValueById('balance-total', newBalanceTotal)
  }
})
