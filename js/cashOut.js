document.getElementById('cash-out-money-btn').addEventListener('click', function(event){
     event.preventDefault();

     const getAmount = getInputFieldValueById ('cash-out-money-input');

     const getPin = getInputFieldValueById ('pin-no-cash-out');

     if(isNaN(getAmount)){
          alert('Faild to cash out');
          return;
     }


     if(getPin === 1234){

          const accountBalance = getTextFieldValueById('account-balance');

          if(getAmount  > accountBalance){
               alert('Do not have enough money');
               return;
          }

          const currentBalance = accountBalance - getAmount;

          document.getElementById('account-balance').innerText = currentBalance;

          const div = document.createElement('div');

          div.classList.add('bg-slate-400');

          div.innerHTML = `

          <h4 class = "text-xl font-bold text-neutral-800">Cash Out</h2>
          <p class = "text-neutral-800">${getAmount} withdraw. New Balance: : ${currentBalance}</p>
          `
          document.getElementById('transaction-container').appendChild(div);
     }
     else{
          alert('Invalid PIN No.');
     }
})