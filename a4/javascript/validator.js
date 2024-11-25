//Validation for the functions
function isValid() {
    if (firstName() && lastName() && Email() && Phone() && Username() &&
        Password() && Address() && City() && Country() && State() && ZipCode()) {

        document.getElementById("submiterror").innerHTML = "";
        return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

FirstName.addEventListener('blur', firstName, false);

//First name function script
function firstName() {

    var validFirstname = false;
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    if (firstname === "null" || firstname === "" || firstname.length > 20) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length");
    } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("First name invalid — bad characters");
    } else {
        validFirstname = true;
        console.log("First name valid");
    }

    document.getElementById("fname").innerHTML = errorMessages;

    return (validFirstname);
}

//Last name function script
function lastName() {
    var validLastname = false;

    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    if (lastname === "null" || lastname === "" || lastname.length > 50) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length");
    } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("Last name invalid — bad characters");
    } else {
        validLastname = true;
        console.log("Last name valid");
    }

    document.getElementById("lname").innerHTML = errorMessages;

    return (validLastname);
}

//Email function script
function Email() {
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";
    var validEmail = false;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email address.</p>";

    } else {
        validEmail = true;
    }

    document.getElementById("email").innerHTML = errorMessages;

    return (validEmail);
}

//Phone function script
function Phone() {
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";
    var validPhone = false;

    if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
        errorMessages += "<p>Invalid phone number.</p>";

    } else {
        validPhone = true;
    }

    document.getElementById("phone").innerHTML = errorMessages;

    return (validPhone);
}

//Username function script
function Username() {
    var username = document.getElementById("Username").value;
    var errorMessages = "";
    var validUsername = false;

    if (username.length > 12 || username === null || username === "") {
        errorMessages += "<p>Invalid username, maximum of 12 characters</p>";

    } else {
        validUsername = true;
    }

    document.getElementById("username").innerHTML = errorMessages;

    return (validUsername);
}

//Password function script
function Password() {
    var password = document.getElementById("Password").value;
    var errorMessages = "";
    var validPassword = false;

    if (password.length > 7 || password === null || password === "") {
        errorMessages += "<p>Invalid password, maximum of 7 characters</p>";

    } else {
        validPassword = true;
    }

    document.getElementById("password").innerHTML = errorMessages;

    return (validPassword);
}

//Address function script
function Address() {
    var address = document.getElementById("Address").value;
    var errorMessages = "";
    var validAddress = false;

    if (address.length > 50 || address === null || address === "") {
        errorMessages += "<p>Invalid address, maximum of 50 characters</p>";

    } else {
        validAddress = true;
    }

    document.getElementById("address").innerHTML = errorMessages;

    return (validAddress);
}

//City function script
function City() {
    var city = document.getElementById("City").value;
    var errorMessages = "";
    var validCity = false;

    if (city.length > 30 || city === null || city === "") {
        errorMessages += "<p>Invalid city, maximum of 30 characters</p>";

    } else {
        validCity = true;
    }

    document.getElementById("city").innerHTML = errorMessages;

    return (validCity);
}

//Zipcode function script
function ZipCode() {
    var zipcode = document.getElementById("Zipcode").value;
    var country = document.getElementById("Country").value;
    var errorMessages = "";
    var validZipCode = false;

    if ((isNaN(zipcode) || zipcode.length > 5 || zipcode === null || zipcode === "") && country === "USA") {
        errorMessages += "<p>Invalid zipcode, maximum of 5 numbers</p>";

    } else {
        validZipCode = true;
    }

    document.getElementById("zipcode").innerHTML = errorMessages;

    return (validZipCode);
}

//State function script
function State() {
    var state = document.getElementById("State").value;
    var country = document.getElementById("Country").value;

    var errorMessages = "";
    var validState = false;

    if ((state === null || state === "blank") && country === "USA") {
        errorMessages += "<p>please select a state</p>";

    } else {
        validState = true;
    }

    document.getElementById("state").innerHTML = errorMessages;

    return (validState);
}

//Country function script
function Country() {
    var country = document.getElementById("Country").value;
    var errorMessages = "";
    var validCountry = false;

    if (country === null || country === "blank") {
        errorMessages += "<p>please select a country</p>";

    } else {
        validCountry = true;
    }

    document.getElementById("country").innerHTML = errorMessages;

    return (validCountry);
}
