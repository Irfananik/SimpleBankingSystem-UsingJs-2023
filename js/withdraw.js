document.getElementById('btn-withdraw').addEventListener('click', function () {
  // get withdraw value from the deposit input field
  const newWithdrawAmount = getInputFieldValueById('withdraw-field')
  const previousWithdrawAmount = getTextFieldValueById('withdraw-total')
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount

  if (newWithdrawAmount > 0) {
    //set withdraw nwe total amount
    setTextElelmentValueById('withdraw-total', newWithdrawTotal)
  } else {
    alert('Please enter a valid amount')
  }

  //set new total amount
  const previousBalanceTotal = getTextFieldValueById('balance-total')
  const newBalanceTotal = previousBalanceTotal - newWithdrawTotal
  if(newWithdrawAmount > 0 && newWithdrawAmount < previousBalanceTotal){
    setTextElelmentValueById('balance-total', newBalanceTotal)
  }
})
