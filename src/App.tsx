import { HIGHWAY6 } from "./roads/data/routes";
import Road from "./roads/Road";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAA2AD-0V2rynza0ilrK873_-exHFrfNc",
  authDomain: "udotpics.firebaseapp.com",
  projectId: "udotpics",
  storageBucket: "udotpics.appspot.com",
  messagingSenderId: "321720729690",
  appId: "1:321720729690:web:92ab460cf7978d70ce5863",
  measurementId: "G-KSNHN46JFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (<>
  <Road route={HIGHWAY6}/>
  </>);
}

export default App;
