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


function verify() {

    let email=  document.getElementById("email");
    let password=  document.getElementById("password");
    let error= document.getElementById("error");
    

    if(email.value==""){
        email.style.boarder ="1px solid red";
        alert("invlid mail id");
        return false;
        }
        else if(password.value==""){
            password.style.boarder ="1px solid red";
            error.innerHTML="invalid password";
            return false;
            }
            else if (password.value.length<8) {
            password.style.boarder ="1px solid red";
            error.innerHTML="weak password";
            return false;  
            
            }
            else{
            return true;
        }
}

 


function validate(){
     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/ ; 
     if(regexp.test(email.value)){
        error.innerHTML ="valid";
        error.style.color="green";
        return true;
     }
     else {
        error.innerHTML ="invalid";
        error.style.color="red";
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



