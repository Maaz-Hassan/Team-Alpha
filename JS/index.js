function login()
{
    var username = document.getElementById("usrnme").value;
    localStorage.setItem("username",username);
}
document.getElementById("username").innerHTML = "Hi, "+localStorage.getItem("username")+" !";
document.getElementById("exampleModalLabel").innerHTML = "Hi, "+localStorage.getItem("username")+" !";
