importScripts('https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  // TODO add your messagingSenderId
  messagingSenderId: ''
});
var messaging = firebase.messaging();
