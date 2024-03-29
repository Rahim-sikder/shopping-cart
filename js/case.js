
function updateCaseNumber(isIncrease){
   const caseNumberField = document.getElementById('case-number-field');
   const caseNumberString =caseNumberField.value;
   const previousCaseNumber = parseInt(caseNumberString);

   if(isIncrease == true){
       newCaseNumber = previousCaseNumber + 1;
   }
   else{
      newCaseNumber = previousCaseNumber - 1;
   }

   
   caseNumberField.value = newCaseNumber;
}



document.getElementById('btn-case-plus').addEventListener('click',function(){
        updateCaseNumber(true);

        const caseTotalPrice = newCaseNumber * 56;
        const caseTotalaElement = document.getElementById('case-total');
        caseTotalaElement.innerText = caseTotalPrice;
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
      updateCaseNumber(false);
      const caseTotalPrice = newCaseNumber * 56;
        const caseTotalaElement = document.getElementById('case-total');
        caseTotalaElement.innerText = caseTotalPrice;
  });