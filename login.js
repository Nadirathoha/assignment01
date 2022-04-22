document.addEventListener("DOMContentLoaded",() =>{
    const loginform = document.querySelector("#login");
    const createAccountform = document.querySelector("#createAccount");


    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginform.classList.add("form-hidden");
        createAccountform.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginform.classList.remove("form-hidden");
        createAccountform.classList.add("form-hidden");
    });

});


function myFunction() {
     verify();
     validate();
     validateNumber();
    
}



function verify() {

    var email=  document.getElementById("email");
    var password=  document.getElementById("password");
    
    

    if(email.value==""){
        email.style.boarder ="1px solid red";
        document.getElementById("msg0").innerHTML="Invalid email id";
        return false;
        }
        else if(password.value==""){
            email.style.boarder ="1px solid red";
            document.getElementById("msg1").innerHTML="Invalid password";
            return false;
            }
            else if (password.value.length<8) {
            password.style.boarder ="1px solid red";
            document.getElementById("msg1").innerHTML="password must be 8 characters long";
            return false;  
            
            }
            else{
            return true;
        }
}

 


 function validate(){
    var email=  document.getElementById("email");
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/  


      if(regexp.test(email.value)){
        alert("Valid email id");
         
         return true;
      }
      else {
         document.getElementById("msg0").innerHTML ="Sorry incorrect email id";
        
         return false;        
      }
  }




function validateNumber(){
    var mn=document.getElementById("mob_no");
    
    if(mn.value==""){
        document.getElementById("msg").innerHTML ="please fill mobile number";
        return false;
    } 
    if(isNaN(mn.value)){
        document.getElementById("msg").innerHTML ="only numbers are allowed";
        return false;  
    }
    if ((mn.value.length<10) || (mn.value.length>10)) {
        document.getElementById("msg").innerHTML =" Mobile number must be 10 digits";
        return false;  
        
    }
    else if((mn.value.charAt(0)!=9) && (mn.value.charAt(0)!=8) && (mn.value.charAt(0)!=7)){
        document.getElementById("msg").innerHTML ="invalid Mobile number ";
        return false;   
    }
}



