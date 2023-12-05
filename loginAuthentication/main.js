function Login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" && password === ""){
        alert("Please enter User Name And Password")
    } 
    else if(username ==="admin" && password === "admin"){
        alert("Login Successfully")

    }

}