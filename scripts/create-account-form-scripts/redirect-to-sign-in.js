const redirectButton = document.querySelector('[sign-in-button]');

function redirectToSignInPage() {
    location.assign('./index.html');
}

export {redirectButton, redirectToSignInPage};