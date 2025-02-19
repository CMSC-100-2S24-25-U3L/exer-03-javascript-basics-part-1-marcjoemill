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

console.log(validatePassword("HELLOs1111", "HELLOs1111"));