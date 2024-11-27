function isValid() {
  if (Name() && Email() && Comment()) {

       document.getElementById("submiterror").innerHTML =""
      return true;
    }  else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false; }
  }








//Name function script
function Name() {
  var name = document.getElementById("Name").value;
  var errorMessages = "";
  var validName = false;
  
  if (name.length >50 || name===null || name==="") {
  errorMessages += "<p>Invalid Name, maximum of 50 characters</p>";
  
  } else {
    validName = true;
  }
  
  document.getElementById("wname").innerHTML = errorMessages;

  return (validName);
  
}
  
  //Email function script
function Email() {
var userEmail = document.getElementById("Email").value;
var errorMessages = "";
var validEmail = false;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
  errorMessages += "<p>Invalid email address.</p>";
    
} else {
 validEmail = true;
}
  
   document.getElementById("wemail").innerHTML = errorMessages;

return (validEmail);
}
  
  //Comment function script
function Comment() {
  var comment = document.getElementById("Comment").value;
  var errorMessages = "";
  var validComment = false;
  
  if (comment.length >500 || comment===null || comment==="") {
  errorMessages += "<p>Invalid comment, maximum of 500 characters</p>";
  
  } else {
    validComment = true;
  }
  
  document.getElementById("wcomment").innerHTML = errorMessages;

  return (validComment);
  
}
