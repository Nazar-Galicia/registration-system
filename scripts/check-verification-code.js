const incorrectCodeTextElement = document.querySelector('.incorrect-code');

function checkCode() {
    const userCode = sessionStorage.getItem('userOtpVerificationCode');
    const serverCode = sessionStorage.getItem('otpVerififcationCode');

    if (userCode === serverCode) {
        incorrectCodeTextElement.textContent = '';
        location.assign('../site.html');
    } else {
        incorrectCodeTextElement.textContent = 'Incorrect code';
    }
}

export {checkCode};