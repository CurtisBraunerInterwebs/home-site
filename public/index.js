console.log("hell0 from index.js");

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, get, onValue, child, update, push} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
import { getStorage } from "firebase/storage";
//import * as functions from "https://www.gstatic.com/firebasejs/9.8.4/firebase-functions.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc5LcHx8y2plE2bSOcDQT6scpN5DMwSdU",
    authDomain: "curtis-brauner.firebaseapp.com",
    databaseURL: "https://curtis-brauner.firebaseio.com",
    projectId: "curtis-brauner",
    storageBucket: "curtis-brauner.appspot.com",
    messagingSenderId: "883059390391",
    appId: "1:883059390391:web:b44c6643bb156c9ee9da32",
    measurementId: "G-JJ9HGSC2DT"
  };

document.addEventListener('DOMContentLoaded', function() {
  init();
        
});

function init () {

  // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);
      const auth = getAuth(app);
      const analytics = getAnalytics(app);
      const fs = getFirestore(app);
      const storage = getStorage(app);
      //console.log("init started");
      var user;
      window.location.hash = 'welcome';
      var contactReady = true;

      const loginButton = document.getElementById("loginBtn");

      loginButton.addEventListener("click", function () {
            const userEmail = document.getElementById('email').value;
            const userPassword = document.getElementById('password').value;
            register(userEmail, userPassword);
      });

      function login (email, password) {
        console.log('signing in ' + email);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
          user = userCredential.user;
          console.log('signed in ' + user.email);
          console.log(user);
            })
          .catch((INVALID_PASSWORD) => {
            alert('Wrong Password, please try again');
            document.getElementById('password').value = "";
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
        });
      }

      function register (email, password) {
        if (email == "signedIn@email.com") {
          logout();
        } else {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //signed in
          user = userCredential.user;
          console.log('new user ' + user.email);
        })
        .catch((EMAIL_EXISTS) => {
          login (email, password);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
        });
        if (email == "crbs1234@gmail.com") {
          admin(true);
        }
       }}

      function logout () {
        console.log('signing out');
        const email = user.email;
        signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log('signed out ' + email);
        }).catch((error) => {
          // An error happened.
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
        });
        admin(false);
      }

      function getFromRT(toGet) {
        get(ref(db, toGet)).then((snapshot) => {
          if (snapshot.exists()){
            return snapshot.val();
          } else { return 'File not found' ; }
        }).catch((error) => { console.error(error); })
      }

      function setinRT(loc, toSet) {
        onValue(ref(db, loc),((snapshot)=> {
          if (snapshot.exists()){
            console.log(snapshot.val());
            set(ref(db, loc),{
              toSet
            });
          } else {(console.log('Nothin\' is there'));}
        }))
      }

      function getFromFS(toGet) {
        var info = getDoc(doc(db, ))
      }
}
