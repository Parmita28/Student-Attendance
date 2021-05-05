import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCVueUUFSU82cJ_Hbs19iP9oLidaqceB-w",
  authDomain: "project-60-4d963.firebaseapp.com",
  databaseURL: "https://project-60-4d963-default-rtdb.firebaseio.com",
  projectId: "project-60-4d963",
  storageBucket: "project-60-4d963.appspot.com",
  messagingSenderId: "575917249379",
  appId: "1:575917249379:web:0c7e35a26d631d73603956"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)}

export default firebase.database();
