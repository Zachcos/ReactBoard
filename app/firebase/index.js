import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAFwMlCvbYgd80CJ_NGlNpBu6QaZQ0yg2g",
    authDomain: "reactboard-a6db8.firebaseapp.com",
    databaseURL: "https://reactboard-a6db8.firebaseio.com",
    projectId: "reactboard-a6db8",
    storageBucket: "reactboard-a6db8.appspot.com",
    messagingSenderId: "14675268828"
  }
  firebase.initializeApp(config);
} catch(e) {

}

export const firebaseRef = firebase.database().ref();

export default firebase;
