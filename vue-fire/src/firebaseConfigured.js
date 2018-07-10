import firebase from 'firebase'

// let config = {
//   apiKey: "AIzaSyAzYwdpMDSOnZU8JKdanfYRFqN2c0d-NBw",
//   authDomain: "vuefire-15504.firebaseapp.com",
//   databaseURL: "https://vuefire-15504.firebaseio.com",
//   projectId: "vuefire-15504",
//   storageBucket: "vuefire-15504.appspot.com",
//   messagingSenderId: "367909420571"
// }

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzYwdpMDSOnZU8JKdanfYRFqN2c0d-NBw",
  authDomain: "vuefire-15504.firebaseapp.com",
  databaseURL: "https://vuefire-15504.firebaseio.com",
  projectId: "vuefire-15504",
  storageBucket: "vuefire-15504.appspot.com",
  messagingSenderId: "367909420571"
});

export const db = firebaseApp.database()