
function updateCaseTotalPrice (newCaseNumber){
      
   const caseTotalPrice = newCaseNumber * 56;
   const caseTotalaElement = document.getElementById('case-total');
   caseTotalaElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
        updateCaseNumber(true);
        updateCaseTotalPrice (newCaseNumber)
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
      updateCaseNumber(false);
      updateCaseTotalPrice (newCaseNumber)
  });