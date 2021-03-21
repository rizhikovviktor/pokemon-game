import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPb0aDihvxbiOpuQPxJgkWV132ctrfZK0",
    authDomain: "pokemon-game-9ad63.firebaseapp.com",
    databaseURL: "https://pokemon-game-9ad63-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-9ad63",
    storageBucket: "pokemon-game-9ad63.appspot.com",
    messagingSenderId: "554430978524",
    appId: "1:554430978524:web:71ae531c851c706aae5719"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;