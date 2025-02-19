// Marc Joemil Mendoza
// 2023 - 13729

// 1st Function
function validatePassword(password1, password2){
    // Checker for character requirements
    var hasUC = false;
    var hasLC = false;
    var hasNUM = false;
    var reqChecker = false;
    for (let i = 0; i < password1.length; i++) {
        if (password1[i] >= 'A' &&  password1[i] <= 'Z'){
            hasUC = true;
        }

        if (password1[i] >= 'a' &&  password1[i] <= 'z'){
            hasLC = true;
        }

        if (password1[i] >= '0' &&  password1[i] <= '9'){
            hasNUM = true;
        }
    }

    if (hasLC === true && hasUC === true && hasNUM === true){
        reqChecker = true;
    }

    // Check all password requirements
    if (password1 === password2 && password1.length >= 8 && reqChecker == true) {
        return true
    } else {
        return false
    }
}

// 2nd Function
function reversePassword(password){
    var len = password.length;
    var reversed =  "";

    // Reverse the string using concatenation from the end in reverse
    for (let i = len-1; i >= 0; i--){
        reversed = reversed.concat(password[i]);
    }

    return reversed;
}

// 3rd Function
function storePassword(name, password1, password2){
    // Initialize new password as password1 
    var newPassword = password1
    // Check if password matches
    if (validatePassword(password1, password2)){
        newPassword = reversePassword(password1)
    }
    const object = {
        name: name,
        newpassword: newPassword
    }

    return object;
}


console.log(validatePassword("Pass1234", "Pass1234"));
console.log(reversePassword("Pass1234"));
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));