const form = document.getElementById('form');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const city=document.getElementById('city');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('Submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const NameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const CityValue=city.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

     if(NameValue === '') {
        setError(Name, 'Username is required');
    } else {
        setSuccess((Name).length < 6);
    }

    

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(CityValue===''){
        setError(city, 'City is required');
    } else{
        setSuccess(city);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6 ) {
        setError(password, 'Password must be at least 6 characters.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Password doesn't match");
    } else {
        setSuccess(password2);
    }

};

 