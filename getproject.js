function get_data(){

    var database = firebase.database();
    var ref = database.ref('project');
    ref.on('value',gotData, errData)


}

function gotData(data) {
    //  console.log(data.val());
    var user = data.val();
    var key = Object.keys(user);
    console.log(key);
    for (var i =0 ; i<key.length ; i++){
        var k = key[i];
        var name = user[k].name;
        var category = user[k].category;
        var discription = user[k].discription;
        var title = user[k].title;
        var note = user[k].note;
        var file_url = user[k].file;
        var file_name = user[k].filename;
       // console.log(name, category)

        var para = document.createElement("span");
        var username_node = document.createTextNode(name);
        var title_node = document.createTextNode(title);
        var category_node = document.createTextNode(category);
        var disc_node = document.createTextNode(discription);
        var note_node = document.createTextNode(note);

        var name_node = document.createTextNode(file_name);
        //+ lineBreak + title + "\n   " + title + "\n" + disc + "\n" + note
        //var fullText = node + lineBreak + category;


            // showing name with div class
        var name_div= document.createElement('div');
        name_div.className = 'name';
        para.appendChild(name_div);
        name_div.appendChild(username_node);
        para.appendChild(document.createElement('br'));

        // showing title with div class
        var title_div= document.createElement('div');
        title_div.className = 'title';
        para.appendChild(title_div);
        title_div.appendChild(title_node);
        para.appendChild(document.createElement('br'));

        var cat_div= document.createElement('div');
        cat_div.className = 'category';
        para.appendChild(cat_div);
        cat_div.appendChild(category_node);
        para.appendChild(document.createElement('br'));

        var disc_div= document.createElement('div');
        disc_div.className = 'discription';
        para.appendChild(disc_div);
        disc_div.appendChild(disc_node);
        para.appendChild(document.createElement('br'));



        var note_div= document.createElement('div');
        note_div.className = 'note';
        para.appendChild(note_div);
        note_div.appendChild(note_node);
        para.appendChild(document.createElement('br'));






        var a_tag= document.createElement('a');
        a_tag.href = file_url;
        para.appendChild(a_tag);
        a_tag.appendChild(name_node);
        para.appendChild(document.createElement('br'));




        var element = document.getElementById("showpost");
        element.appendChild(para);
    }
}
function errData(err) {
    console.log('error');
    //console.log(err);
}
