// step-1 : add event handler
document.getElementById("btn-withdraw").addEventListener("click", function(){
    // step-2 : get input withdraw amount by using getInputFieldValueById() function
  const getWithdrawInputFieldAmount = getInputFieldValueById("withdraw-input-Field")
//   step-3 : get withdraw previous amount by using getTextElementValueById() function
    const getPreviousWithdrawAmountTotal = getTextElemnetValueById("withdraw-amount-total")
    // step-4 : calculate new withdraw total
    const newWithdrawTotal = getPreviousWithdrawAmountTotal + getWithdrawInputFieldAmount
     
    // step-5 : set new withdraw total by using set function()
setTextElementValueById("withdraw-amount-total", newWithdrawTotal)
// STEP-6: GET PREVIOUS BALANCE by using getTextElementValueById() function
const previousBalanceAmont = getTextElemnetValueById("balance-amount")
// step-7 : CALCULATE NEW BALANCE TOTAL AFTER WITHDRAW
const getBalanceAfterWithdraw = previousBalanceAmont - getWithdrawInputFieldAmount
// step-8: set the balance after the withdraw part
     setTextElementValueById("balance-amount", getBalanceAfterWithdraw)

})