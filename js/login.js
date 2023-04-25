// Step-1: add click event handler with the submit button clicked

document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2:  get the eamil address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    // step-3: get password
    // 3-1: set id on the html element
    // 3-2: get the element
    // 3-3: get the value from element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);

    // DANGER: DO NOT VERIFY email password on the client side
    // Step-4: verify email and password and check whether valid user or not
    if(email === 'sonata@abaap.com' && password === 'secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }

})
