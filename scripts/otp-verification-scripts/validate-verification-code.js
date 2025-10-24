import { getUserVerificationCode } from "./submit-verification-code.js";

class ValidateConfirmCode {
    selectors = {
        form: '[confirm-verification]',
    }
    errors = {
        valueMissing: () => 'Fill this field',
    }

    constructor() {
        this.bindEvents();
    }

    errorsRender(field, errors) {
        if (errors.length > 0) {
            field.classList.add('input-error');
        } else { 
            field.classList.remove('input-error');
        }
    }

    validateField(field) {
        const validity = field.validity;
        
        const fielderrors = [];

        Object.entries(this.errors).forEach(([errorName, errorValue]) => {
            if(validity[errorName]) {
                fielderrors.push(errorValue(field));
            }
        });
        
        let isValid = fielderrors.length === 0;

        this.errorsRender(field, fielderrors);  

        return isValid;
    }
    onSubmit(event) {
        event.preventDefault();
        
        const isFormElement = event.target.matches(this.selectors.form);

        if(!isFormElement) {
            return
        }

        const formElements = [...event.target.elements].filter(({required}) => required);
        let isFormValid = true

        formElements.forEach((element) => {
            const isElementValid = this.validateField(element);

            if(!isElementValid) {
                isFormValid = false
            }
        })

        if(isFormValid) {
            getUserVerificationCode();
        }
    }

    bindEvents() {
        document.querySelector(this.selectors.form).addEventListener('submit', (event) => this.onSubmit(event));
    }
}

export {ValidateConfirmCode};