function validate(){
    var email = document.getElementById("email_field");
    var password = document.getElementById("password_field");

    if (email=="admin" && password == "user"){
        alert("login Successful");
    }
    else{
        alert("login Failed");
    }
}