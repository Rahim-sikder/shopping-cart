
function updateCaseTotalPrice (newCaseNumber){
      
   const caseTotalPrice = newCaseNumber * 56;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
        const newCaseNumber = updateCaseNumber(true);
        updateCaseTotalPrice(newCaseNumber);
        calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
     const newCaseNumber  = updateCaseNumber(false);
      updateCaseTotalPrice(newCaseNumber);
      calculateSubTotal();
  });