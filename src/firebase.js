import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkA1KBzYBmeC40elfxLtKcMoj9Vd8DqW4',
  authDomain: 'reddit-clone-a0d0b.firebaseapp.com',
  databaseURL: 'https://reddit-clone-a0d0b.firebaseio.com',
  projectId: 'reddit-clone-a0d0b',
  storageBucket: 'reddit-clone-a0d0b.appspot.com',
  messagingSenderId: '1059558279345',
  appId: '1:1059558279345:web:8790d6ff8b88d5f33a7a90',
  measurementId: 'G-HG1VQXQ907',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
