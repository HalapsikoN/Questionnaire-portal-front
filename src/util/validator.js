const emailRegex = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])");
const passwordRegex = new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}");
const phoneRegex = new RegExp("^([+]?[0-9]{3,25}([\\s)]+)?)$");

export const isLogInValid = (data) => {
    let message = "Invalid input:\n";
    let noError = true;

    if (!emailRegex.test(data.email)) {
        message += " *  Enter the correct email (Example: example@simple.com).\n";
        noError = false;
    }
    if (!passwordRegex.test(data.password)) {
        message += " *  Enter the correct password (Minimum length of password is 6 symbols. It must contain of latin letters, have capital letter and numeral).\n";
        noError = false;
    }

    if (!noError) {
        alert(message);
        return false;
    } else {
        return true;
    }
};

export const isLogUpValid = (data) => {
    let message = "Invalid input:\n";
    let noError = true;

    if (!emailRegex.test(data.email)) {
        message += " *  Enter the correct email (Example: example@simple.com).\n";
        noError = false;
    }
    if (!passwordRegex.test(data.password)) {
        message += " *  Enter the correct password (Minimum length of password is 6 symbols. It must contain of latin letters, have capital letter and numeral).\n";
        noError = false;
    }
    if (data.password !== data.confirmPassword) {
        message += " *  The confirm password is not the same.\n";
        noError = false;
    }
    if (!phoneRegex.test(data.phone)) {
        message += " *  Enter the correct phone number (Minimum length of phone is 3 symbols. It may contain (+) symbol and must have only numerals).\n";
        noError = false;
    }


    if (!noError) {
        alert(message);
        return false;
    } else {
        return true;
    }
};