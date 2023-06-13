// Import the functions you need from the SDKs you need
// Se importan funciones necesarias 
import { initializeApp } from "firebase/app";
//InitializeApp = funcion para iniciar la conexion con firebase
import { getFirestore} from "firebase/firestore"
//GetFirestore la uso para obtener la instanci de Firestore
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Se trabaja con un objeto el cual contiene toda la informacion de la cuenta. la Key es personal la cual es de acceso

const firebaseConfig = {
    apiKey: "AIzaSyAL3MjQ44Z27gLLHqBm3mzvgMHr1d8RA4M",
    authDomain: "ichiraku-manga.firebaseapp.com",
    projectId: "ichiraku-manga",
    storageBucket: "ichiraku-manga.appspot.com",
    messagingSenderId: "358569206535",
    appId: "1:358569206535:web:cd74df71a79af2d4c9dba2",
    measurementId: "G-B2YBX3ED3G"
};

// Initialize Firebase
// inicio firebase pasandole el objeto con los datos a la funcion importada. esto devuelve una intancia de firebase
const app = initializeApp(firebaseConfig);
//Uso getfirestore para obtener esa instancia pasandole como arg app

export const dataBase = getFirestore(app) 
// const analytics = getAnalytics(app);