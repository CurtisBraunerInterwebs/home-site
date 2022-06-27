console.log("hell0 from index.js");

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
    const loadEl = document.querySelector('#load');
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    
    //firebase.auth().onAuthStateChanged(user => { });
    //firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    //firebase.firestore().doc('/foo/bar').get().then(() => { });
    //firebase.functions().httpsCallable('yourFunction')().then(() => { });
    //firebase.messaging().requestPermission().then(() => { });
    //firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //firebase.analytics(); // call to activate
    //firebase.analytics().logEvent('tutorial_completed');
    //firebase.performance(); // call to activate
    
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
});
/*     try {
      let app = firebase.app();
      let features = [
        'auth', 
        'database', 
        //'firestore',
        //'functions',
        //'messaging', 
        'storage', 
        //'analytics', 
        'remoteConfig',
        //'performance',
      ].filter(feature => typeof app[feature] === 'function');
      loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
    }
  }); */


  const formSelect  = document.getElementById('formSelect');
  formSelect.addEventListener(onchange, function () {
    option = formSelect.options[formSelect.selectedIndex];
    makeForm(option);
    console.log(option.value + ' selected!');
  });
  function makeForm (type) {
    const formToMake = document.getElementById('addNew');
    console.log('Adding a new ' + type.value);
    var prompt = document.createElement('p');
            prompt.innerHTML = 'You are making a new' + type.value +'?  Tell us about it!';
            formToMake.appendChild(prompt);
    switch (type.id) {
        case newClass:
            document.getElementById("addNew-label").innerHTML = "New Class";
            break;
        case newChar:
            document.getElementById("addNew-label").innerHTML = "New Character";
            break;
        case newSpell:
            document.getElementById("addNew-label").innerHTML = "New Spell";
            break;
        case newEquip:
            document.getElementById("addNew-label").innerHTML = "New Equipment";
            break;
        default:
            document.getElementById("addNew-label").innerHTML = "Something FUCKED UP";
            break;
    }


  }

