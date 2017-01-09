var firebase = require('firebase');

// Initialize Firebase
try {

	var config = {
		apiKey: "AIzaSyAdAkfyqJ7yi3w3kJ9pWkudFi20N3g3_8Q",
		authDomain: "panelnetwork-5c65f.firebaseapp.com",
		databaseURL: "https://panelnetwork-5c65f.firebaseio.com",
		storageBucket: "panelnetwork-5c65f.appspot.com",
		messagingSenderId: "1067341951402"
	};

firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;