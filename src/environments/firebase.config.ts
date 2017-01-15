
import { AuthMethods, AuthProviders } from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyBZGrBUIdFp29H0FZ1EpYK8HLExdl7fO5Y",
    authDomain: "angular2-firebase-5e5aa.firebaseapp.com",
    databaseURL: "https://angular2-firebase-5e5aa.firebaseio.com",
    storageBucket: "angular2-firebase-5e5aa.appspot.com",
    messagingSenderId: "696406874917"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};