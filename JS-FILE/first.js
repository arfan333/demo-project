
document.getElementById("btn-deposit").addEventListener("click", function(){
    const getDepositAmountTotal = getInputFieldValueById('deposit-input-field')

// get previous deposit total number by using a single function called

const getPreviousDepositTotal = getTextElemnetValueById("field-deposit")

// get new deposit total by calculating (previousdepositTotal + currently deposit amount)

const getNewDepositTotal = getPreviousDepositTotal + getDepositAmountTotal
// set deposit total value
setTextElementValueById("field-deposit", getNewDepositTotal)
// get fixied balance 
const getPreviousBalanceTotal = getTextElemnetValueById("balance-amount")
const getNewBalanceAfterDeposit = getPreviousBalanceTotal + getDepositAmountTotal
setTextElementValueById("balance-amount", getNewBalanceAfterDeposit)
    
})