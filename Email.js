function isValid() {
    if (email())
    return true;
    else
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

Email.addEventListener('blur', email, false);
function email(){
    var validEmail=false;
    var errorMessages = "";
    var userEmail = document.getElementById("Email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages += "<p>The E-Mail is required</p>";
        console.log("EMail invalid — length")
        } else {
                validEmail = true;
                console.log("E-mail valid")
        };

    document.getElementById("el").innerHTML = errorMessages;

    return (validEmail);
};