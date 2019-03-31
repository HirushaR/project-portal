function get_data(){
    

    var database = firebase.database();
    var ref = database.ref('Resource');
    ref.on('value',gotData, errData)


}

function gotData(data) {
       
     // console.log(data.val());
    var user = data.val();
    var key = Object.keys(user);
    console.log(key);
    for (var i =0 ; i<key.length ; i++){
        var k = key[i];
        var title = user[k].res_title;
        var file = user[k].res_file;
        var file_name = user[k].filename;
        var desc = user[k].res_desc;
        var tag = user[k].res_tag;
        var cat = user[k].res_cat;



        var para = document.createElement("span");
        var title_node = document.createTextNode(title);
        var file_node = document.createTextNode(file);
        var fileName_node = document.createTextNode(file_name);
        var cat_node = document.createTextNode(cat);
        var tag_node = document.createTextNode(tag);
        var desc_node = document.createTextNode(desc);
        //+ lineBreak + title + "\n   " + title + "\n" + disc + "\n" + note
        //var fullText = node + lineBreak + category;

            // showing name with div class
        var filename_div= document.createElement('div');
        filename_div.className = 'title';
        para.appendChild(filename_div);
        filename_div.appendChild(title_node);
        para.appendChild(document.createElement('br'));

        // showing title with div class
        var file_div= document.createElement('div');
        file_div.className = 'category';
        para.appendChild(file_div);
        file_div.appendChild(cat_node);
        para.appendChild(document.createElement('br'));

        var file_div= document.createElement('div');
        file_div.className = 'tag';
        para.appendChild(file_div);
        file_div.appendChild(tag_node);
        para.appendChild(document.createElement('br'));

        var file_div= document.createElement('div');
        file_div.className = 'description';
        para.appendChild(file_div);
        file_div.appendChild(desc_node);
        para.appendChild(document.createElement('br'));

        var cat_div= document.createElement('a');
        cat_div.href = file;
        para.appendChild(cat_div);
        cat_div.appendChild(fileName_node);
        para.appendChild(document.createElement('br'));



        var element = document.getElementById("showpost");
        element.appendChild(para);
    }
}
function errData(err) {
    console.log('error');
    //console.log(err);
}
