document.getElementById('btn-deposit').addEventListener('click', function(){
    // get deposit value from the deposit input field 
    const newDepositAmount = getInputFieldValueById('deposit-field')
    const previousDepositTotal = getTextFieldValueById('deposit-total')
    const newDepositTotal = newDepositAmount + previousDepositTotal

    // set deposit total new amount
    setTextElelmentValueById('deposit-total', newDepositTotal)

    //set new total amount
    const previousBalanceTotal = getTextFieldValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount
    setTextElelmentValueById('balance-total', newBalanceTotal)
})