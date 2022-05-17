const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0"
}

function close(){
    mainMenu.style.top = "-100%"
}


// For the password visibility
const togglePassword = document.querySelector("#togglePwd");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPwd");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const username = document.getElementById("username");
const fullname = document.getElementById("fullname");
const phone = document.getElementById("phone");


togglePassword.addEventListener("click", function () {
    // toggle type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // to toggle eye icon
    this.classList.toggle("bi-eye");
});
toggleConfirmPassword.addEventListener("click", function () {
    // toggle type attribute
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);

    // to toggle eye icon
    this.classList.toggle("bi-eye");
});

form.addEventListener("submit", function (e) {
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

const isValidPhone = phone => {
    const ph = /^[0][7-9][0][1-9]\d{7}/g;
    return ph.test(String(phone));
}

const isValidFullname = fullname => {
    const full = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/g;
    return full.test(String(fullname).toLowerCase());
}

const isValidUsername = username => {
    const hasNumber = /\d/;   
    return hasNumber.test(username); 
}

const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phoneValue = phone.value.trim();

    if(fullnameValue === '') {
        setError(fullname, 'Fullname is required');
        return false
    }else if(!isValidFullname(fullnameValue)){
        setError(fullname, 'Must be at least two names');
        return false
    }else {
        setSuccess(fullname);
    }

    if(usernameValue === '') {
        setError(username, 'Username is required');
        return false
    }else if(usernameValue.length<9 || usernameValue.length>15){
        setError(username, 'Must be 9-15 characters')
        return false
    }else if(!isValidUsername(usernameValue)){
        setError(username, 'Must contain atleast one digit')
        return false
    }else {
        setSuccess(username);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone-number is required');
        return false
    }else if(!isValidPhone(phoneValue)){
        setError(phone, 'Provide a valid phone number');
        return false
    }else {
        setSuccess(phone);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        return false
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        return false
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        return false
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
        return false
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        return false
    }else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        return false
    }else {
        setSuccess(password2);
    }

    if(fullnameValue){
        swal("Registration successful ✔")
    }
};



