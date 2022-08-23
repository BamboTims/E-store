import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyDAJVBTFlanuWGnzMNV21zDIzKhuY-wKUA",
	authDomain: "store-db-2a44e.firebaseapp.com",
	projectId: "store-db-2a44e",
	storageBucket: "store-db-2a44e.appspot.com",
	messagingSenderId: "329177421963",
	appId: "1:329177421963:web:9d480e03603987a0f0dc8e",
	measurementId: "G-VF3WB6L63L",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		try {
			const { displayName, email } = userAuth;
			const createdAt = new Date();

			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error encountered", err);
		}
	}

	return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
