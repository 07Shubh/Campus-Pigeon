
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

 var email = undefined;

  function login(){
    email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    if(email == "admin" && password == "shubh"){
        window.location.replace(`admin_page.html?email=${email}`)
        // window.email_id = email;
    }

    else{
        firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        email = user.email
        window.location.replace(`normal_user.html?email=${email}`)
 
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: "+errorMessage)
      });
    }
  }

  const params = new URLSearchParams(window.location.search)
  var email_id = params.get("email")
  document.getElementById("profile_email").innerHTML ="Email ID: "+ email_id;
  document.getElementById("profile_name").innerHTML = "Name: "+email_id.split('@')[0];


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
