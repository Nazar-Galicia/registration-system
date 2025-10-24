const codeText = document.querySelector('.code');

function generateCode() {
    const code = Math.floor((Math.random() * 1000) + 1000);
    const stringCode = String(code)
    
    codeText.textContent = stringCode;
    
    sessionStorage.setItem('otpVerififcationCode', stringCode);
}

export {generateCode};