import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAumqabCesj_PpP-wd3XbCw4R5SlDfzf7g",
  authDomain: "rewardyteachers.firebaseapp.com",
  databaseURL: "https://rewardyteachers-default-rtdb.firebaseio.com",
  projectId: "rewardyteachers",
  storageBucket: "rewardyteachers.appspot.com",
  messagingSenderId: "177719400665",
  appId: "1:177719400665:web:58ec94690b9a225bedc6c8",
  measurementId: "G-7RD080FVSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//console.log(auth)

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  try{
   const response = await signInWithPopup(auth, provider)
      const name = response.user.displayName;
      const email = response.user.email;
      const picture = response.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("picture", picture);
      localStorage.setItem('token', response.user.accessToken);
      console.log(response)
return response.user
    }catch(err){
      console.log(err);
    };
};
