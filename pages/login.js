// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Layout from "../components/layout";

// Configure Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyDfY0VBAjggziFulyd8KNPBtMIj32kWtXA",
  authDomain: "projet-tamba.firebaseapp.com",
  projectId: "projet-tamba",
  storageBucket: "projet-tamba.appspot.com",
  messagingSenderId: "898354134416",
  appId: "1:898354134416:web:16bb7ee605e4e191aec715",
  measurementId: "G-1VL8SK0N0B",
};
firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <Layout>
        <h1 className="text-4xl">Connexion</h1>
        <p>Veuillez vous connecter:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Layout>
    );
  }
  return (
    <Layout>
      <div>
        <p>
          Welcome {firebase.auth().currentUser.displayName}! You are now
          signed-in!
        </p>
        <button>
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </button>
      </div>
    </Layout>
  );
}

export default SignInScreen;
