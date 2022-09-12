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
			const { email } = userAuth;
			const { displayName } = additionalData;
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

export const addCollectionAndDocuments = async (
	collectionKey,
	documentsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	documentsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items,
		};
	});
	return transformedCollection.reduce((acc, cur) => {
		acc[cur.title.toLowerCase()] = cur;
		return acc;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
