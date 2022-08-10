function login()
{
    var person = [
    {
    person1 : "teacher",
    username : "Syed Muhammad Taha",
    pasword : "smtaha101"    
    },
    {
        person1 : "teacher",
        username : "Syeda Aeliya Naqvi",
        pasword : "anaqvi123"    
    },
    {
        person1 : "teacher",
        username : "Muhammad Usman",
        pasword : "musman786"    
    },
    {
        person1 : "parent",
        username : "Bashir Khan",
        pasword : "bishkhan1"  
    },
    {
        person1 : "parent",
        username : "Momina Sameen",
        pasword : "monisam1"  
    },
    {
        person1 : "parent",
        username : "Dilawar Mattu",
        pasword : "dilawar"  
    },
    {
        person1 : "student",
        username : "Nousheen Khan",
        pasword : "nousheen"  
    },
    {
        person1 : "student",
        username : "Aslam Baig",
        pasword : "baig"  
    },
    {
        person1 : "student",
        username : "Pervaiz Khadim",
        pasword : "pappu"  
    }
];
    var person1 = document.getElementById("person1").value;
    var username = document.getElementById("usrnme").value;
    var password = document.getElementById("usrpass").value;
    for (var i=0; i<=person.length; i++)
    {
        if(person1=="teacher" && username==person[i].username && password==person[i].pasword)
        {
            window.open("https://www.google.com");
            return
        }
        else if(person1=="parent" && username==person[i].username && password==person[i].pasword)
        {
            window.open("https://www.google.com");
            return
        }
        else if(person1=="student" && username==person[i].username && password==person[i].pasword)
        {
            window.open("https://www.google.com");
            return
       }
    }

     alert("INCORRECT USERNAME OR PASSWORD");        

}
