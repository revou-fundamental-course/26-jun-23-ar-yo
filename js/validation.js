function ValidationForm() {
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let phoneNumber = document.forms["RegForm"]["Phone"];
    let message = document.forms["RegForm"]["Message"];
    
    if(username.value == "") {
      alert("Please enter your name.");
      username.focus();
      return false;
    }
    if(email.value == "") {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf("@", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf(".", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(phoneNumber.value == "") {
      alert("Please enter your telephone number.");
      phoneNumber.focus();
      return false;
    }
    if(message.value == "") {
      alert("Please enter your message");
      message.focus();
      return false;
    }
    return true;
  }