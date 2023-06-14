document.getElementById('login-btn').addEventListener('click', function(){
    // get email field Value
    const emailField = document.getElementById('email')
    const emailFieldValue = emailField.value
    //emailField = ''
    
    // get password field Value
    const passwordField = document.getElementById('password')
    const passwordFieldValue = passwordField.value
    //passwordField = ''

    // condition
    if (emailFieldValue === 'qk.bank@gmail.com' && passwordFieldValue === 'qk123'){
        window.location.href = 'banking.html'
    }
    else{
        alert('Please enter a valid email or password!')
    }
})