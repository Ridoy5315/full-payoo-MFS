
document.getElementById('btn-login').addEventListener('click', function(event){
     event.preventDefault();
     const loginNumber = document.getElementById('login-number').value;
     const loginPin = document.getElementById('login-pin').value;

     if(loginNumber === '13120738728' && loginPin === '1234'){
          console.log('login successfully');
          alert('Login successfully');
          window.location.href = './home.html';
     }
     else{
          console.log('phone number or pin number is incorrect');
          alert('login failed');
     }
})