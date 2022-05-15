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
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPwd");

togglePassword.addEventListener("click", function () {
    // toggle type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // to toggle eye icon
    this.classList.toggle("bi-eye");
});
toggleConfirmPassword.addEventListener("click", function () {
    // toggle type attribute
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);

    // to toggle eye icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.getElementsByTagName("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
});
