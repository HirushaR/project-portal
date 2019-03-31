

function sendArticle() {
    var tit = document.getElementById('title').value;
    var dit = document.getElementById('details').value;
    var fil = document.getElementById('files').value;
   

    var database = firebase.database();
    var userDetails = database.ref("Article");
    console.log(userDetails);
    // insert method set or push

    var ref = firebase.storage().ref('ArticleFiles');
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

                title1: tit,
                detail1: dit,
                file:url

            });

        }) .catch(console.error);
    setTimeout(function () {
        //Redirect with JavaScript
        window.location.href= 'article.html';
    }, 5000);

}

