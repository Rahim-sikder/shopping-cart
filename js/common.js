function updateCaseNumber(isIncrease){
   const caseNumberField = document.getElementById('case-number-field');
   const caseNumberString =caseNumberField.value;
   const previousCaseNumber = parseInt(caseNumberString);

   let newCaseNumber;
   if(isIncrease == true){
       newCaseNumber = previousCaseNumber + 1;
   }
   else{
      newCaseNumber = previousCaseNumber - 1;
   }

   
   caseNumberField.value = newCaseNumber;
   return newCaseNumber;
};



function getTextElementValueById (elementId){
   const phoneTotalElement = document.getElementById(elementId);
   const currentPhoneTotalString = phoneTotalElement.innerText;
   const currentPhoneTotal = parseInt (currentPhoneTotalString);
   return currentPhoneTotal;

};

// calculate sub-total
function calculateSubTotal(){
   //   calculate total
   const currentPhoneTotal = getTextElementValueById ('phone-total');
   const currentCaseTotal = getTextElementValueById('case-total');

   const currentSubTotal = currentPhoneTotal + currentCaseTotal;
   const subTotalElement = document.getElementById('sub-total');
   subTotalElement.innerText = currentSubTotal;

};