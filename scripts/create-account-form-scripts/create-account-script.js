import { redirectButton, redirectToSignInPage } from "./redirect-to-sign-in.js";
import { RegValidateForm } from "./validate-registration-form.js";

redirectButton.addEventListener('click', redirectToSignInPage);

new RegValidateForm();