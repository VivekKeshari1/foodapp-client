import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,

  apiKey: "AIzaSyC6xVmRIbIcDdjPnLwRzkPDgwiA-FWQVPk",
  authDomain: "foodapp-3bb4f.firebaseapp.com",
  projectId: "foodapp-3bb4f",
  storageBucket: "foodapp-3bb4f.appspot.com",
  messagingSenderId: "470791865831",
  appId: "1:470791865831:web:5f2a845f57ce86b510e942"
};
console.log("Firebase Config:", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;