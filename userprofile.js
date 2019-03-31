function get_data(){

    var database = firebase.database();
    var  ref = database.ref('newuser');
    ref.on('value',gotData, errData)


}

function gotData(data) {
      console.log(data.val());
    var newuser = data.val();
    var key = Object.keys(newuser);
    //console.log(key);
    for (var i =0 ; i<key.length ; i++){
        var k = key[i];
        var userphoto = newuser[k].userphoto;
        var username = newuser[k].username;
        var fname = newuser[k].fname;
        var lname = newuser[k].lname;
        var email = newuser[k].email;
        var batch = newuser[k].batch;
        var degree = newuser[k].degree;
        var bday = newuser[k].bday;
        var gender = newuser[k].gender;
       // console.log(name, category)

        var para = document.createElement("span");
        var userphoto_node = document.createTextNode(userphoto);
        var username_node = document.createTextNode(username);
        var fname_node = document.createTextNode(fname);
        var lname_node = document.createTextNode(lname);
        var email_node = document.createTextNode(email);
        var batch_node = document.createTextNode(batch);
        var degree_node = document.createTextNode(degree);
        var bday_node = document.createTextNode(bday);
        var gender_node = document.createTextNode(gender);
        //+ lineBreak + title + "\n   " + title + "\n" + disc + "\n" + note
        //var fullText = node + lineBreak + category;

            // showing name with div class
        var name_div= document.createElement('div');
        name_div.className = 'userphoto';
        para.appendChild(name_div);
        name_div.appendChild(userphoto_node);
        para.appendChild(document.createElement('br'));

        // showing title with div class
        var title_div= document.createElement('div');
        title_div.className = 'username';
        para.appendChild(title_div);
        title_div.appendChild(username_node);
        para.appendChild(document.createElement('br'));

        var cat_div= document.createElement('div');
        cat_div.className = 'fname';
        para.appendChild(cat_div);
        cat_div.appendChild(fname_node);
        para.appendChild(document.createElement('br'));

        var disc_div= document.createElement('div');
        disc_div.className = 'lname';
        para.appendChild(disc_div);
        disc_div.appendChild(lname_node);
        para.appendChild(document.createElement('br'));



        var note_div= document.createElement('div');
        note_div.className = 'email';
        para.appendChild(note_div);
        note_div.appendChild(email_node);
        para.appendChild(document.createElement('br'));

        var note_div= document.createElement('div');
        note_div.className = 'batch';
        para.appendChild(note_div);
        note_div.appendChild(batch_node);
        para.appendChild(document.createElement('br'));


        var note_div= document.createElement('div');
        note_div.className = 'degree';
        para.appendChild(note_div);
        note_div.appendChild(degree_node);
        para.appendChild(document.createElement('br'));


        var note_div= document.createElement('div');
        note_div.className = 'bday';
        para.appendChild(note_div);
        note_div.appendChild(bday_node);
        para.appendChild(document.createElement('br'));

        var note_div= document.createElement('div');
        note_div.className = 'gender';
        para.appendChild(note_div);
        note_div.appendChild(gender_node);
        para.appendChild(document.createElement('br'));





        var element = document.getElementById("showpost");
        element.appendChild(para);
    }
}
function errData(err) {
    console.log('error');
    //console.log(err);
}
