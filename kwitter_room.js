
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUBVQ49uI_NtwyxOAbs8w8POyxyqluw1A",
    authDomain: "chat-box-99b2e.firebaseapp.com",
    databaseURL: "https://chat-box-99b2e-default-rtdb.firebaseio.com/",
    projectId: "chat-box-99b2e",
    storageBucket: "chat-box-99b2e.appspot.com",
    messagingSenderId: "955242318685",
    appId: "1:955242318685:web:39fc0b66a4b30f0bb536b4",
    measurementId: "G-JZXZK58XBH"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }
    function logout() {
        window.replace("Main.html");
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();