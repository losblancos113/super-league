const firebase = require('firebase');
require('firebase/firestore');
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDHRV643GlgRPO8XORc0uJ6WJ6NE4xP9Dw",
    authDomain: "super-league-7c6d4.firebaseapp.com",
    databaseURL: "https://super-league-7c6d4.firebaseio.com",
    projectId: "super-league-7c6d4",
    storageBucket: "super-league-7c6d4.appspot.com",
    messagingSenderId: "55504288873"
  });
}
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

db.enablePersistence()
  .catch(function (err) {
    if (err.code == 'failed-precondition') {
      console.error(err);
      // db = firebase.firestore();
    } else if (err.code == 'unimplemented') {
      console.error(err);
      // db = firebase.firestore();
    }
  });

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
module.exports.DB = db;
