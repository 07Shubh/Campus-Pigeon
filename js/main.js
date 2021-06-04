
var firebaseConfig = {
    apiKey: "AIzaSyDmFc0lDVUoI_IGKE0eamjoKjfwN8yHcaI",
    authDomain: "campus-pigeon.firebaseapp.com",
    projectId: "campus-pigeon",
    storageBucket: "campus-pigeon.appspot.com",
    messagingSenderId: "298095525359",
    appId: "1:298095525359:web:0b353ab9b8fcbf75a24a1a",
    measurementId: "G-FW1KD3RY9B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      userDiv = document.getElementById("user-div");
      

    } else {
      // No user is signed in.
      loginDiv = document.getElementById("login-div");

    }
  });

  function login(){
    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    if(email == "admin" && password == "shubh"){
        window.location.replace("admin_page.html")
    }

    else{
        firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.replace("normal_user.html")
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: "+errorMessage)
      });
    }
  }

  function logout(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      window.location.replace("index.html")
    }).catch((error) => {
      // An error happened.
      var errorMessage = error.message;
      window.alert("Error: "+errorMessage)
    });
  }
