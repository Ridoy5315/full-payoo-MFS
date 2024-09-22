document.getElementById('add-money-btn').addEventListener('click', function(event){
     event.preventDefault();

     const addMoney = getInputFieldValueById('add-money-input');

     const getInput = getInputFieldValueById('pin-no-input');

     if(isNaN(addMoney)){
          alert('Faild to add money');
          return;
     }

     if(getInput === 1234){

          const accountBalance = getTextFieldValueById('account-balance');

          const currentBalance = accountBalance + addMoney;
          
          document.getElementById('account-balance').innerText = currentBalance;

          //add transaction history

          const p = document.createElement('p');

          p.innerText = ` added: ${addMoney}TK.  New Balance: ${currentBalance}`;

          document.getElementById('transaction-container').appendChild(p);
     }
     else{
          alert('INvalid PIN No.');
     }
})