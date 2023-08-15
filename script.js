var siginBtnVar= true

function signInFunc(){
    if(siginBtnVar){
        registerFun()
    }
    else{
        loginFunc()

    }

}

function registerFun() {
    var register = document.getElementById("register");
    var login = document.getElementById("login");
    var signin = document.getElementById("signinBtn");
    login.style.left = "-500px";
    register.style.right = "4px";
    signin.innerHTML = "Login";
    siginBtnVar = false;
}


function loginFunc() {
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var signin = document.getElementById("signinBtn");
    login.style.left = "100px";
    register.style.right = "-500px";
    signin.innerHTML = "Sign In";
    siginBtnVar = true;
}

function myMenuFunction() {
    var menu = document.getElementById("navMenu");
    if (menu.classList === "menu") {
        menu.className += "responsive";
    } else {
        menu.className = "menu";
    }
}

// function takevalue() {
//     var username = document.getElementById("username").value;
//     var lpassword = document.getElementById("lpassword").value;
//     document.write("Your Username is: " + username + "<br>");
//     document.write("Your Password is: " + lpassword + "<br>");
// }

function displayregister(e) {
    e.preventDefault();

    var fname = document.getElementById("f-name").value;
    localStorage.setItem("firstname",fname);

    var lname = document.getElementById("l-name").value;
    localStorage.setItem("lastname",lname);

    var username = document.getElementById("user-name").value;
    localStorage.setItem("username",username);

    var email = document.getElementById("u-email").value;
    localStorage.setItem("useremail",email);

    var password = document.getElementById("u-password").value;
    localStorage.setItem("userpassword",password);


    window.location.href = "display.html";
    // var fname = document.getElementById("fname");
    // var lname = document.getElementById("lname");
    // var uname = document.getElementById("uname");
    // var email = document.getElementById("email");
    // var password = document.getElementById("password").value;
    // document.write("Your Firstname is: " + fname + "<br>");
    // document.write("Your Lastname is: " + lname + "<br>");
    // document.write("Your Username is: " + uname + "<br>");
    // document.write("Your Email is: " + email + "<br>");
    // document.write("Your Password is: " + password + "<br>");
}

function display() {
    var fname = document.getElementById("f-name");
    var lname = document.getElementById("l-name");
    var username = document.getElementById("user-name");
    var email = document.getElementById("u-email");
    var password = document.getElementById("u-password");
    
    var f1name = localStorage.getItem('firstname');
    fname.innerHTML = f1name;
    var l1name = localStorage.getItem('lastname');
    lname.innerHTML = l1name;
    var user1name = localStorage.getItem('username');
    username.innerHTML = user1name;
    var uemail = localStorage.getItem('useremail');
    email.innerHTML = uemail;
    var upassword = localStorage.getItem('userpassword');
    password.innerHTML = upassword;
}