
//ADD YOUR F
const firebaseConfig = {
      apiKey: "AIzaSyCjQIsmGw-vQ1_4lUyds9YGOoKItGxzD9k",
      authDomain: "kwitter-data-9f95f.firebaseapp.com",
      databaseURL: "https://kwitter-data-9f95f-default-rtdb.firebaseio.com",
      projectId: "kwitter-data-9f95f",
      storageBucket: "kwitter-data-9f95f.appspot.com",
      messagingSenderId: "751413703778",
      appId: "1:751413703778:web:44918db3fb034132b1cd3b",
      measurementId: "G-ZM8FH50MBT"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
     
     function addRoom() {
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room name",room_name);
      window.location="kwitter_page.html"
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomnName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();
      
function RedirectToRoomnName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
}