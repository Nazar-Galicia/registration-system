import { generateCode } from "../generate-verification-code.js";
import { bindEventChangeInput } from "./chgange-otp-inputs.js";
import { changeText } from "./update-email-text.js";
import { ValidateConfirmCode } from "./validate-verification-code.js";

const confirmVerificationForm = document.querySelector("[confirm-verification]");
const dataInputForm = document.querySelector("[data-input-form]");

function redirectToCodeConfirmation() {
    dataInputForm.classList.remove('active');
    confirmVerificationForm.classList.add('active');

    generateCode();
    new ValidateConfirmCode();
    bindEventChangeInput();
    changeText();
}

export {redirectToCodeConfirmation};