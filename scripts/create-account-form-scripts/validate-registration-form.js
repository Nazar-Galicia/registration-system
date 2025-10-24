import { redirectToOtp } from "../redirect-to-otp.js";

class RegValidateForm {
    selectors = {
        form: '[form]',
    }

    errors = {
        patternMismatch: ({title}) => title || "pattern missmatch",
        valueMissing: () => 'Fill this field',
        tooShort: ({minLength}) => `Too short (${minLength})`,
        tooLong: ({maxLength}) => `Too long (${maxLength})`,
    }

    constructor() {
        this.bindEvents();
    }

    errorsRender(field, errors) {
        if (errors.length > 0) {
            field.classList.add('input-error');
            field.nextElementSibling.textContent = errors[0];
        } else {
            field.classList.remove('input-error');
            field.nextElementSibling.textContent = '';
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

    onBlur(event) {
        const isRequired = event.target.required;
        const isForm = event.target.closest(this.selectors.form);

        if(isForm && isRequired) {
            this.validateField(event.target);
        }
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
            redirectToOtp();
        }
    }

    bindEvents() {
        document.querySelector(this.selectors.form).addEventListener('blur', (event) => this.onBlur(event), {capture: true});
        document.querySelector(this.selectors.form).addEventListener('submit', (event) => this.onSubmit(event))
    }
}

export {RegValidateForm};