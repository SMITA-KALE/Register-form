const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');

const cpassword = document.getElementById('cpassword');

//add event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

//more email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexof("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexof('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1)return false;
    return true;
}
const validate = () =>{
    const form = document.value.trim();
    const usernameVal = document.value.trim();
    const emailVal = document.value.trim();
    const phoneVal = document.value.trim();
    const passwordVal = document.value.trim();
    const cpasswordVal = document.value.trim();


    //validate username

    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <=  2){
        setErrorMsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }
    //validate email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid email');
    }else{
        setSuccessMsg(email);
    }

    //validate phone
    if(phoneVal === ""){
        setErrorMsg(phone, 'phone no  cannot be blank');
    }else if(passwordVal.length != 10){
        setErrorMsg(phone, 'Not A valid phone number');
    }else{
        setSuccessMsg(phone);
    }

    //validate password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Minimum 6 char');
    }else{
        setSuccessMsg(password);
    }
    //validate cpassword
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, ' confirm password cannot be blank');
    }else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword, 'password not match');
    }else{
        setSuccessMsg(cpassword);
    }
    

}
function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    
}