
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
 import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
console.log('test')

const nombreUsuario = document.getElementById('nombreUsuario')
const btnIngreso = document.getElementById('btnIngreso')
const btmSalir = document.getElementById('btnSalir')
const contenidoWeb = document.getElementById('contenidoWeb')
const Formulario = document.getElementById('formulario')
const texto = document.getElementById('texto')
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = initializeApp({
   apiKey: "AIzaSyAF583cg0nC6qTHnhGmA8Zn5-cPOqZXQdY",
   authDomain: "bootstrap-chat-11b0e.firebaseapp.com",
   projectId: "bootstrap-chat-11b0e",
   storageBucket: "bootstrap-chat-11b0e.appspot.com",
   messagingSenderId: "463422186830",
   appId: "1:463422186830:web:fb6a01034071650cdaea1f"
 });

 const auth = getAuth(firebaseConfig);
 const db = getFirestore(firebaseConfig);

 // Initialize Firebase
 //const app = initializeApp(firebaseConfig);

 onAuthStateChanged(auth, user =>{
     if (user){
        accionCerrarSesion()
     }else{         
        accionAccederSesion()
     }
 });

 const accionAccederSesion = () =>{
    console.log('No user')
    Formulario.classList.add('d-none')
    contenidoWeb.innerHTML=`
    <p class= "lead mt-5 text-center">Debes iniciar sesión</p>
    `
 }

 
 const accionCerrarSesion = () =>{
    console.log('Logged in!')
    
    Formulario.classList.remove('d-none')
}