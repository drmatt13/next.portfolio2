export default [
  {
    cmd: "npm install firebase react-firebase-hooks",
    "firebase BasicConfig.js": `
// default firebase imports
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// firebaseConfig imported from firebase project console
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const BasicConfig = () => {

  // firebase useAuthState hook takes firebase.auth() and returns a tuple of [user, loading, error]
  const [user, loading, error] = useAuthState(auth);

  return <>
    <SignOut />
    {user ? <App /> : <Login />}
  </>
}

function Login() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign out</button>
  );
}

export defualt BasicConfig;
`,
  },
];
