function get_data(){

    var database = firebase.database();
    var ref = database.ref('Article');
    ref.on('value',gotData, errData)


}

function gotData(data) {
    //  console.log(data.val());
    var user = data.val();
    var key = Object.keys(user);
   // console.log(key);
    for (var i =0 ; i<key.length ; i++){
        var k = key[i];
        var title2 = user[k].title1;
        var detail2 = user[k].detail1;
        var files2 = user[k].file;




        var para = document.createElement("span");
        var title2_node = document.createTextNode(title2);
        var detail2_node = document.createTextNode(detail2);
        var files2_node = document.createTextNode(files2);
      
        //+ lineBreak + title + "\n   " + title + "\n" + disc + "\n" + note
        //var fullText = node + lineBreak + category;

            // showing name with div class
        var name_div= document.createElement('div');
        name_div.className = 'name';
        para.appendChild(name_div);
        name_div.appendChild(title2_node);
        para.appendChild(document.createElement('br'));

        // showing title with div class
        var title_div= document.createElement('div');
        title_div.className = 'title';
        para.appendChild(title_div);
        title_div.appendChild(detail2_node);
        para.appendChild(document.createElement('br'));

        // var title_div= document.createElement('div');
        // title_div.className = 'title';
        // para.appendChild(title_div);
        // title_div.appendChild(files2_node);
        // para.appendChild(document.createElement('br'));


        var cat_div= document.createElement('img');
        cat_div.src = files2;
        para.appendChild(cat_div);
        cat_div.appendChild(files2_node);
        para.appendChild(document.createElement('br'));


        var element = document.getElementById("showpost");
        element.appendChild(para);
    }

}
function errData(err) {
    console.log('error');
    //console.log(err);
}
