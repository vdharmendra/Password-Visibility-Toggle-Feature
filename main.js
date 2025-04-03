 // debugger;
 let eyeIcon = document.getElementById("eyeIcon");
 let password = document.getElementById("password");
 eyeIcon.onclick = function(){
     // debugger;
     if(password.type === "password"){
         password.type = "text";
         eyeIcon.classList.remove("bi-eye-slash");
         eyeIcon.classList.add("bi-eye");
     }else{
         password.type ="password";
         eyeIcon.classList.remove("bi-eye");
         eyeIcon.classList.add("bi-eye-slash");
     }
    //  console.log(password.type + " "+ password.value);
 }