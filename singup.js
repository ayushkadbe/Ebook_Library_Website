function validateform(){  
   
   var password = document.forms["singup"]["password"]; 
     
  
   if(password.length<6){  
     alert("Password must be at least 6 characters long.");  
     return false;  
     }  
   }