const firebaseConfig = {
    apiKey: "AIzaSyBP-nMO8B8ljysgvZ5OmzYr7HYGdx4VxO0",
    authDomain: "practice-activity-736ad.firebaseapp.com",
    databaseURL: "https://practice-activity-736ad-default-rtdb.firebaseio.com",
    projectId: "practice-activity-736ad",
    storageBucket: "practice-activity-736ad.appspot.com",
    messagingSenderId: "91203107574",
    appId: "1:91203107574:web:7b6ad28acbe64fb63c4ad7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
     user_name = document.getElementById("user_name").Value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addingUser"
    })
}