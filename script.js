const signupBtn =document.querySelector(".sign_up");
const loginBtn =document.querySelector(".log_in");
const toggleBtn =document.querySelector(".toggle_btn");
const signupContainer=document.querySelector(".signup_container");
const loginContainer=document.querySelector(".login_container");
const userName=document.querySelector(".username");
const email=document.querySelector(".email");
const password=document.querySelector(".password");
const password2=document.querySelector(".confirm_password");


signupBtn.addEventListener("click",()=>{
    signupBtn.classList.add("movesign");
    loginBtn.classList.add("moveslog");
    signupContainer.classList.add("switchsignup");
    loginContainer.classList.add("switchlogin");
})

loginBtn.addEventListener("click",()=>{
    signupBtn.classList.remove("movesign");
    loginBtn.classList.remove("moveslog");
    signupContainer.classList.remove("switchsignup");
    loginContainer.classList.remove("switchlogin");
})

// Validation

const reg = {
    nameRegex: /^[A-Za-z_ ]{3,16}$/,
    usernameRegex: /^[A-Za-z_ 0-9]{3,16}$/,
    pincodeRegex: /^[1-9][0-9]{5}/,
    emailRegex: /^[a-zA-Z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
    mobileRegex: /^[789][0-9]{9}/,
    passwordRegex: /^[a-zA-Z0-9!@#$%^&]{8,15}$/,
    addressRegex: /^[A-Za-z_ ]{10,100}$/
}

const emptyRegex = /^$/;

function reusableValidation (field, regex) {
 const fieldValue = document.getElementById(field);
 if(checkEmpty(fieldValue)) {
    return false
 } else if(checkRegex(fieldValue, reg[regex])){
    return false
 }
 return true;
}

function getSignUp(e) {
    e.preventDefault();
    const form = document.querySelector(".signup_container")
    for(let i = 0; i< form.children.length -1; i++) {
        if(checkEmpty(form.children[i].children[1])) continue;
    }
    if(document.querySelector("#conPassword").value !== document.querySelector("#password").value) {
        alert("Both the password are different")
        return false
    }
    alert("User Registered successfully")
    window.location.reload();
}

function getLogin(e) {
    e.preventDefault();
    const form = document.querySelector(".login_container")
    for(let i = 0; i< form.children.length -1; i++) {
        if(checkEmpty(form.children[i].children[1])) continue;
    }
    if(document.querySelector("#conPassword").value !== document.querySelector("#password").value) {
        alert("Both the password are different")
        return false
    }
    alert("log in successful")
    window.location.reload();
}

function checkEmpty (elem){
    if(emptyRegex.test(elem.value.trim()))  {
        elem.parentElement.querySelector('.error').innerHTML = `Please enter ${elem.name}`;
        elem.parentElement.querySelector('span').classList.remove('sno');
        return true
    }
    else {
        elem.parentElement.querySelector('.error').innerHTML = '';
        elem.parentElement.querySelector('span').classList.add('sno');
        return false;
    }
}

function checkRegex(elem, regex) {
    if(!regex.test(elem.value.trim())) {
        elem.parentElement.querySelector('.error').innerHTML = `Please enter valid ${elem.name}`;
        elem.parentElement.querySelector('span').classList.remove('sno');
        return true
    } else {
        elem.parentElement.querySelector('.error').innerHTML = '';
        elem.parentElement.querySelector('span').classList.add('sno');
        return false
    }
}