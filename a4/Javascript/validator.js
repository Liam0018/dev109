function isValid() {
    if (firstName() && lastName() && Email() && Phone() && Username() &&
       Password() && Address() && City() && Country()  && State() && ZipCode()) {
      
      document.getElementById("submiterror").innerHTML =""
      return true;
    }  else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false; }
}

FirstName.addEventListener('blur', firstName, false);

function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
}
function lastName(){
  //1) Create variable
var validLastname=false;
  
//2) read value from HTML
var lastname = document.getElementById("LastName").value;
var errorMessages = "";

//3) Do validation
   if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        }

  //4) Send error message to HMTL
   document.getElementById("lname").innerHTML = errorMessages;
//5) return status of each field
return (validLastname);

}
function Email() {
var userEmail = document.getElementById("Email").value;
var errorMessages = "";
var validEmail = false;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
  errorMessages += "<p>Invalid email address.</p>";
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
} else {
 validEmail = true; //Or assign the value to a variable. For example validEmail = true
}
   //4) Send error message to HMTL
   document.getElementById("email").innerHTML = errorMessages;
//5) return status of each field
return (validEmail);
}

function Phone() {
  var phone = document.getElementById("Phone").value;
  var errorMessages = "";
  var validPhone = false;

if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
  errorMessages += "<p>Invalid phone number.</p>";

  //send error message. For example errorMessages = "<p>Invalid phone number </p>";
} else {
  validPhone = true;
}

   document.getElementById("phone").innerHTML = errorMessages;

  return (validPhone);
  
  
}

function Username() {
  var username = document.getElementById("Username").value;
  var errorMessages = "";
  var validUsername = false;
  
  if (username.length >12 || username===null || username==="") {
  errorMessages += "<p>Invalid username, maximum of 12 characters</p>";
  
  } else {
    validUsername = true;
  }
  
  document.getElementById("username").innerHTML = errorMessages;

  return (validUsername);
  
}

function Password() {
  var password = document.getElementById("Password").value;
  var errorMessages = "";
  var validPassword = false;
  
  if (password.length >7 || password===null || password==="") {
  errorMessages += "<p>Invalid password, maximum of 7 characters</p>";
  
  } else {
    validPassword = true;
  }
  
  document.getElementById("password").innerHTML = errorMessages;

  return (validPassword);
  
}

function Address() {
  var address = document.getElementById("Address").value;
  var errorMessages = "";
  var validAddress = false;
  
  if (address.length >50 || address===null || address==="") {
  errorMessages += "<p>Invalid address, maximum of 50 characters</p>";
  
  } else {
    validAddress = true;
  }
  
  document.getElementById("address").innerHTML = errorMessages;

  return (validAddress);
  
}

function City() {
  var city = document.getElementById("City").value;
  var errorMessages = "";
  var validCity = false;
  
  if (city.length >30 || city===null || city==="") {
  errorMessages += "<p>Invalid city, maximum of 30 characters</p>";
  
  } else {
    validCity = true;
  }
  
  document.getElementById("city").innerHTML = errorMessages;

  return (validCity);
  
}

function ZipCode() {
  var zipcode = document.getElementById("Zipcode").value;
    var country = document.getElementById("Country").value;
  var errorMessages = "";
  var validZipCode = false;
  
  if ((isNaN(zipcode) || zipcode.length >5 || zipcode===null || zipcode==="") && country==="USA") {
  errorMessages += "<p>Invalid zipcode, maximum of 5 numbers</p>";
  
  } else {
    validZipCode = true;
  }
  
  document.getElementById("zipcode").innerHTML = errorMessages;

  return (validZipCode);
  
}

function State() {
  var state = document.getElementById("State").value;
  var country = document.getElementById("Country").value;

  var errorMessages = "";
  var validState = false;
  
  if ((state===null || state==="blank") && country==="USA") {
  errorMessages += "<p>please select a state</p>";
  
  } else {
    validState = true;
  }
  
  document.getElementById("state").innerHTML = errorMessages;

  return (validState);
  
}

function Country() {
  var country = document.getElementById("Country").value;
  var errorMessages = "";
  var validCountry = false;
    

  if (country===null || country==="blank") {
  errorMessages += "<p>please select a country</p>";
  
  } else {
    validCountry = true;
  }
  
  document.getElementById("country").innerHTML = errorMessages;

  return (validCountry);
  
}

