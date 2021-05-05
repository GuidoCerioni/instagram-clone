import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here import seed files
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB0YjJRL-vS_LpMebxMuoXUlwI8sGesUMY',
  authDomain: 'instagram-clone-44867.firebaseapp.com',
  projectId: 'instagram-clone-44867',
  storageBucket: 'instagram-clone-44867.appspot.com',
  messagingSenderId: '228101567034',
  appId: '1:228101567034:web:96301e09a6ef3410e4fb03',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here call seed file ONLY ONCE
// seedDatabase(firebase);

export { firebase, FieldValue };
