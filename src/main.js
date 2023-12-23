import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from './App.vue'
const firebaseConfig = {
    apiKey: "AIzaSyDRu5svuPotE7V_Xp5nobkMg3YPASbYvxw",
    authDomain: "e-demarcheur.firebaseapp.com",
    databaseURL: "https://e-demarcheur.firebaseio.com",
    projectId: "e-demarcheur",
    storageBucket: "e-demarcheur.appspot.com",
    messagingSenderId: "886298839167",
    appId: "1:886298839167:web:5474dadd9e8fb62d90174a",
    measurementId: "G-ZDWR11TG9Q"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).mount('#app')
