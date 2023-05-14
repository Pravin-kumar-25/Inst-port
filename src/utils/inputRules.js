export const nameRules = {
    required: 'Please enter your name...'
};

export const emailRules = {
    required: 'Please enter email address...',
    pattern: {
        value: /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/,
        message:'Enter valid email...'
    }
}

export const passwordRules = {
    required: 'Enter your password',
    // minLength: {
    //     value: 5,
    //     message: 'Password length must be greater than 5...'
    // },
    // validate: (pass) => {
    //     const numberRegex = new RegExp('[0-9]')
    //     const specialCharRegex = new RegExp(/[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)
    //     const capsRegex = new RegExp('[A-Z]')
    //     const smallRegex = new RegExp('[a-z]')
    //     if(!capsRegex.test(pass)) {
    //         return 'Password must contain capital letter...'
    //     }
    //     if(!smallRegex.test(pass)) {
    //         return 'Password must contain small letter...'
    //     }
    //     if(!specialCharRegex.test(pass)) {
    //         return 'Password must contain atleast one special character...'
    //     }
    //     if(!numberRegex.test(pass)) {
    //         return 'Password should contain atleast one number...'
    //     }
    //     return null;
    // }
}

export const signInPasswordRules ={
    required: 'Enter your password'
}

// export const confirmPasswordRules = {
//     required: 'Confirm Password',
//     validate: (value) => {
//         if(value !== password) {
//             return 'Password does not match...'
//         }
//         return false
//     }
// }