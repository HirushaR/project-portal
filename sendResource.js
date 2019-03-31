

function send() {
    var title = document.getElementById('pro_title').value;
    var cat = document.getElementById('pro_cat').value;
    var tag = document.getElementById('pro_tag').value;
    var desc = document.getElementById('pro_desc').value;
    var file = document.getElementById('files').value;


    var database = firebase.database();
    var userDetails = database.ref("Resource");
    //console.log(userDetails);
    // insert method set or push

    var ref = firebase.storage().ref('ResourceFiles/');
    var file = document.querySelector('#files').files[0]
    var name =   file.name + '-' + (+new Date());
    var metadata = {
        contentType: file.type
    };
    var task = ref.child(name).put(file, metadata);
    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            console.log(url);
            userDetails.push({
                res_title : title,
                res_cat : cat,
                res_tag : tag,
                res_desc : desc,
                res_file : url,
                filename:file.name
            });
           // document.querySelector('TagID').src = url;
        })
        .catch(console.error);
    setTimeout(function () {
        //Redirect with JavaScript
        window.location.href= 'resource.html';
    }, 5000);
}

