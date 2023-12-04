import { initializeApp } from 'firebase/app';
import { getDatabase,ref,push,set,get } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCSltisMPDcir5IYjWdddnEZrmkvJN-ryA",
    authDomain: "photowall-9fb03.firebaseapp.com",
    databaseURL: "https://photowall-9fb03-default-rtdb.firebaseio.com",
    projectId: "photowall-9fb03",
    storageBucket: "photowall-9fb03.appspot.com",
    messagingSenderId: "904185893296",
    appId: "1:904185893296:web:c9252a481a5d51e4824675",
    measurementId: "G-JMTWFFCS92"
  };
  const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(app);
// const myRef = databaseRef(database, 'server/saving-data/photowall');

// Export the database reference
export { database,ref,push,set,get };