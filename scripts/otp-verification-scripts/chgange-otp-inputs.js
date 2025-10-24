const confirmCodeInputsContainer = document.querySelector('[data-otp-confirm-code-container]');
let key;

function saveKey(event) {
    key = event.code;
}

function changeInputForward(event) {
    const targetInput = event.target.closest('[data-otp-confirm-code-input]');
    const nextInput = targetInput.nextElementSibling;
    const previousInput = targetInput.previousElementSibling;

    if (targetInput && nextInput && key !== 'Backspace') {
        nextInput.focus();
    } else if (targetInput && previousInput && key === 'Backspace') {
        previousInput.focus();
    }
}

function bindEventChangeInput() {
    confirmCodeInputsContainer.addEventListener('input', changeInputForward);
    confirmCodeInputsContainer.addEventListener('keydown', saveKey);
}

export {bindEventChangeInput};