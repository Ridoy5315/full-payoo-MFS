function getInputFieldValueById (Id){

     getValue = document.getElementById(Id).value;

     getValueNumber = parseFloat(getValue);

     return getValueNumber;
}

function getTextFieldValueById (Id){

     getText = document.getElementById(Id).innerText;

     getTextNumber = parseFloat(getText);

     return getTextNumber;
}

function changeSectionById (Id) {

     document.getElementById('add-money-form').classList.add('hidden');

     document.getElementById('cash-out-form').classList.add('hidden');

     document.getElementById('transaction-section').classList.add('hidden');

     document.getElementById(Id).classList.remove('hidden');
}