

function send() {
    var nam = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var cat = document.getElementById('category').value;
    var disc = document.getElementById('dis').value;
    var note = document.getElementById('note').value;


    var database = firebase.database();
    var userDetails = database.ref("project");
    console.log(userDetails);
    // insert method set or push

    var ref = firebase.storage().ref('project/');
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
                name: nam,
                title: title,
                category: cat,
                discription: disc,
                note: note,
                file:url,
                filename:file.name
            });
            //document.querySelector('#someImageTagID').src = url;
        })
        .catch(console.error);
    setTimeout(function () {
        //Redirect with JavaScript
        window.location.href= 'Project.html';
    }, 5000);
}

