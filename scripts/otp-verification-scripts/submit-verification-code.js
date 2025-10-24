import { checkCode } from "../check-verification-code.js";

const codeInputs = document.querySelectorAll('[data-otp-confirm-code-input]');

function getUserVerificationCode() {
    let userCode = '';
    codeInputs.forEach((element) => {
        userCode += element.value;
    });

    sessionStorage.setItem('userOtpVerificationCode', userCode);

    checkCode();
}

export {getUserVerificationCode};