function validateform(){  
   
   var password = document.forms["singup"]["password"]; 
   var email = document.forms["singup"]["email"];
     
  
     if(password.length<6){  
     alert("Password must be at least 6 characters long.");  
     return false;  
    }  

    if (email.value == "") {
      window.alert(
        "Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    
   }