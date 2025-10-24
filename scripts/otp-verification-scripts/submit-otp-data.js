const dataInputForm = document.querySelector('[data-input-form]');

function submitData() {
    sessionStorage.setItem('otpDataInput', '')

    const formData = new FormData(dataInputForm);
    const objectFormData = Object.fromEntries(formData);

    sessionStorage.setItem('otpDataInput', JSON.stringify(objectFormData));
}

export {submitData};