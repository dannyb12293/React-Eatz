import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnumVpeuLlqwvqus4u8LKJM4tdF67Q0Ls",
    authDomain: "rn-uber-eats-clone-7d01f.firebaseapp.com",
    projectId: "rn-uber-eats-clone-7d01f",
    storageBucket: "rn-uber-eats-clone-7d01f.appspot.com",
    messagingSenderId: "149411123179",
    appId: "1:149411123179:web:cc4d33ce490d5a485793ae"
  };
  
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  export default firebase