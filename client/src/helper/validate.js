import toast from "react-hot-toast";

/** validate login-page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    return errors;
}

/** validate login-page password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors;
}

/** validate password */
function passwordVerify(error={}, values){

    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ':', ';', '<', '>', ',', '.', '?', '/', '~', '`', '|', '\\', '-', '=', '"', "'"];

    if (!values.password) {
        error.password = toast.error("Password Required...!");
    } else if (values.password.includes(" ")) {
        error.password = toast.error("Wrong Password..!");
    } else if (values.password.length < 5) {
        error.password = toast.error("Password must be more than 5 characters long");
    } else if (!specialChars.some(char => values.password.includes(char))) {
        error.password = toast.error("Password must contain at least one special character");
    }
    return error;
}


/**validate resetpassword */
export async function resetPasswordValidate(values){
    const errors = passwordVerify({}, values);
    if (values.password!==values.confirm_pwd){
        errors.exist= toast.error("Password not match...!");
    }
    return errors;
}


/**vaidate register form */
export async function registerValidation(values){
    const errors = usernameVerify({},values);
    passwordVerify(errors,values);
    emailVerify(errors,values);

    return errors;
}


/**validate profile page */
export async function profileValidation(values){
    const errors =emailVerify({},values);
    return errors;
}

/*************************************************** */

/** validate username */
function usernameVerify(error={}, values){
    if (!values.username) {
        error.username = toast.error("Username Required...!");
    } else if (values.username.includes(" ")) {
        error.username = toast.error("Invalid Username..!");
    }
    return error;
}


/** validate email */
function emailVerify(error ={} , values){
    if(!values.emaill){
        error.email = toast.error("Email Required...!")
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wromg Email...!")
    }else if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)){
        error.email = toast.error("Invalid Email Address...!")
    }

    return error;
}
