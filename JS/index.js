

function portal1()
        {
            var username = document.getElementById("usrnme").value;
            if(username!=null && username!=""){
            localStorage.setItem("username",username);
            window.location.href="teacher.html";
            }
            else{
                alert("Please! Enter Your Name First")
            }
        }
        function portal2()
        {
            var username = document.getElementById("usrnme").value;
            if(username!=null && username!=""){
            localStorage.setItem("username",username);
            window.open("parent.html");
        }
        else{
            alert("Please! Enter Your Name First")
        }
        }
        function portal3()
        {
            var username = document.getElementById("usrnme").value;
            if(username!=null && username!=""){
            localStorage.setItem("username",username);
            window.open("student.html");
        }
        else{
            alert("Please! Enter Your Name First")
        }
    }
document.getElementById("username").innerHTML = "Hi, "+localStorage.getItem("username")+" !";
document.getElementById("exampleModalLabel").innerHTML = "Hi, "+localStorage.getItem("username")+" !";

function welcome(){
    alert("Welcome, " +localStorage.getItem("username")+" !")
}