
function send() {
    var x = document.forms["login"]["email"].value;
    var y = /students.nsbm.lk/;
    if (y.test(x)) {
        next();

    }else if (x ==""){
        alert("enter email");
        return (false)
    }
    else {
        alert("You have entered an invalid email address!")
        return (false)
    }
}

function next() {



    var nam = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
   


    var database = firebase.database();
    var userDetailsRef = database.ref("user");
    var newpostRef = userDetailsRef.push();
    

    console.log(newpostRef.key);

    // insert method set or push
    userDetailsRef.push({
        name: nam,
        email:email,
        password:password,
        cpassword:cpassword        
    });
   // window.redirect("https://www.facebook.com");    
  window.open ("login.html");
}
