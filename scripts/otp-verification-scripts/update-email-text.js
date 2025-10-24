const text = document.querySelector('[data-email-verification-text]');

function changeText() {
    const email = JSON.parse(sessionStorage.getItem('otpDataInput')).email;

    const securityEmail = email.slice(0, 3) + "*****" + email.slice(6);

    text.textContent = `Enter OTP sent to ${securityEmail}`;
}

export {changeText}