let mail=document.getElementById('signupMail');
let emailWarning=document.getElementById("emailWarning");

let password=document.getElementById('password');
let passStrength=document.getElementById('strength');
let eye=document.getElementById('eye');
let stateOfEye = false;



// email validation
function emailCheck(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z\-]{2,3})(.[a-z\-]{2,3})?$/
    if(regexp.test(mail.value))
    {
        emailWarning.innerHTML = "";
        return true;

    }else{
        emailWarning.innerHTML = "ENTER VALID EMAIL";
        emailWarning.style.color = "red"
        return false;
    }

}

// show password

function showPassword(){
    eye.classList.toggle('fa-eye-slash');
}

function togglePassword(){
    if(stateOfEye){
        password.setAttribute("type","password");
        stateOfEye=false;
    }else{
        password.setAttribute("type","text");
        stateOfEye=true;
    }

}
// password validtion
password.addEventListener("keyup", function() {
    let passvalue = password.value;
    return passwordCheck(passvalue);
    
  });

function passwordCheck(mypass){
    console.log("started");
    var strength = 0;

    // password length
    if(mypass.length >0 ){
        let size=mypass.length;
        if(size>8){
         strength += 30
        console.log(strength); 
        }
    }
    
    //other validation
    let lowerCase = /[a-z]/
    if (lowerCase.test(mypass)) {
        strength += 16
        console.log(strength);
    }

    let upperCase = /[A-Z]/
    if (upperCase.test(mypass)) {
        strength += 18
        console.log(strength);
    }

    let regularNumber = (/[0-9]/i)
    if (regularNumber.test(mypass)) {
        strength += 16
        console.log(strength);
    }

    let specialChars = (/[^a-z0-9]/i)
    if (specialChars.test(mypass)) {
        strength += 20
        console.log(strength);
    }

        // result display
    let passWarning = document.getElementById('passWarning');

    if (strength < 21) {
        passWarning.innerHTML = "VERY POOR";
        passWarning.style.color = "red"
        passStrength.classList.remove('progress-bar-success');
        passStrength.classList.remove('progress-bar-warning');
        passStrength.classList.add('progress-bar-danger');
        passStrength.style = 'width : 10%'
    } else
        if (strength > 20 && strength < 41) {
            passWarning.innerHTML = "POOR";
            passWarning.style.color = "orange"
            passStrength.classList.remove('progress-bar-success');
            passStrength.classList.remove('progress-bar-danger');
            passStrength.classList.add('progress-bar-warning');
            passStrength.style = 'width : 30%'
        } else
            if (strength > 40 && strength < 61) {
                passWarning.innerHTML = "MEDIUM";
                passWarning.style.color = "orange"
                passStrength.classList.remove('progress-bar-success');
                passStrength.classList.remove('progress-bar-danger');
                passStrength.classList.add('progress-bar-warning');
                passStrength.style = 'width : 60%'
                
            } else
                if (strength > 60 && strength < 81) {
                    passWarning.innerHTML = "STRONG";
                    passWarning.style.color = "green"
                    passStrength.classList.remove('progress-bar-warning');
                    passStrength.classList.remove('progress-bar-danger');
                    passStrength.classList.add('progress-bar-success');
                    passStrength.style = 'width : 80%'
                } else {
                    passWarning.innerHTML = "VERY STRONG";
                    passWarning.style.color = "green"
                        passStrength.classList.remove('progress-bar-success');
                        passStrength.classList.remove('progress-bar-warning');
                        passStrength.classList.add('progress-bar-success');
                        passStrength.style = 'width : 100%'
                        return true;
                }

}

// confirm password checking
function passwordConfirm(){

    let confrmpass = document.getElementById('confirmPassword').value;
    let confirmpasswrng = document.getElementById('passwordConfirmWrng');

    if(confrmpass == password.value){
        confirmpasswrng.innerHTML = "";
        return true;

    }else{
        confirmpasswrng.innerHTML = "REPEAT SAME PASSWORD ";
        confirmpasswrng.style.color = "red"
        return false;
        

    }
}

// phone numer validation
let num = document.getElementById('phonenumber');

num.addEventListener("keyup", function() {
    let number = num.value;
    return numberValidation(number);
    
  });
function numberValidation(num){
    let phnoWarning = document.getElementById('phnoWarning');
    
    let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(regexp.test(num)){
        phnoWarning.innerHTML = "";
        return true;

    }else{
        phnoWarning.innerHTML = "ENTER VALID PHONE NUMBER";
        phnoWarning.style.color = "red"
        return false;

    }
}
