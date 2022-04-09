// Form Blur Event Listener 
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
    const name = document.getElementById("name");
    const re = /^[a-zA-Z]{2,10}$/;
    if(!re.test(name.value)) {
        // add invalid class to name
        name.classList.add('is-invalid');

    }
    else {
        name.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // It means that [letter from Aa to Zz or mixed with 0 to 9 @ then letter from a to z or mixed with 0 to 9 then dot then letter from Aa to Zz in range 2 to 5].email adress like this sth@sth.
    if(!re.test(email.value)) {
        // add invalid class to name
        email.classList.add('is-invalid');

    }
    else {
        email.classList.remove('is-invalid');
    }
}

function validateZip() {

    const zip = document.getElementById("zip");
    const re = /^[0-9]{5}$/; // there should be 5 numbers
    if(!re.test(name.value)) {
        // add invalid class to name
        zip.classList.add('is-invalid');

    }
    else {
        zip.classList.remove('is-invalid');
    }
}

function validatePhone() {

    const phone = document.getElementById("phone");
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; // there should be 5 numbers
    if(!re.test(phone.value)) {
        // add invalid class to name
        phone.classList.add('is-invalid');

    }
    else {
        phone.classList.remove('is-invalid');
    }


}
