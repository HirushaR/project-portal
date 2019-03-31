
function send() {
    var userphoto = document.getElementById('userphoto').value;
    var username = document.getElementById('username').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var batch = document.getElementById('batch').value;
    var degree = document.getElementById('degree').value;
    var bday = document.getElementById('bday').value;
    var gender = document.getElementById('gender').value;
 

    var database = firebase.database();
    var newuser = database.ref("user");
    console.log(newuser);
    // insert method set or push
    newuser.push({
        userphoto: userphoto,
        username:username,
        fname:fname,
        lname:lname, 
        email:email,
        batch:batch,
        degree:degree,
        bday:bday,
        gender:gender

    });
}