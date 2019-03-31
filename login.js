function search(){

        var x= document.forms["login"]["email"].value;
            var y=/students.nsbm.lk/;
        if (y.test(x))
        {
            send();
            
        }else{
        alert("You have entered an invalid email address!")
            return (false)
        }
     }
    

        function send(){

//var tblUsers = document.getElementById('tbl_user_list');
  var databaseRef = firebase.database().ref('user/');


   
  

    var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;

// search user by user name and get the user id 

  console.log( email);

   databaseRef.orderByChild("email").equalTo(email).on('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
       var user_key = snapshot.val();
    console.log(user_key)
        console.log('-----------');
 
       //go through each item found and print out the emails
       snapshot.forEach(function(childSnapshot) {

       var key = childSnapshot.key;
      var childData = childSnapshot.val();
    
        //this will be the actual email value found

         if(childData.password == password){
             sessionStorage.setItem("email", email);
         window.location = "home.html";

         }else{
          alert("username password dosent match");
         }
  });

});
  
} 