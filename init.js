var config = {
    apiKey: "AIzaSyBH50k6vMhmx2nOD2ZljLVfI9K3aGXYabU",
    authDomain: "projectportal-ae310.firebaseapp.com",
    databaseURL: "https://projectportal-ae310.firebaseio.com",
    projectId: "projectportal-ae310",
    storageBucket: "projectportal-ae310.appspot.com",
    messagingSenderId: "21695709276"
};
// Initialize Firebase


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

//  firebase.initializeApp(config);



// for (var x = 0; x < input.files.length; x++) {
//     //add to list
//
//     // li.innerHTML = 'File ' + (x + 1) + ':  ' + input.files[x].name;
//
//     console.log('File ' + (x + 1) + ':  ' + input.files[x].name);
// }

