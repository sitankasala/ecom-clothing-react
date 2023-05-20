import {initializeApp} from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut
} from 'firebase/auth';
import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, writeBatch} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDL5B4Z32q_jEIgJ1fOklPsJDUTDyEhc3w",
    authDomain: "ecom-clothing-db-ffc86.firebaseapp.com",
    projectId: "ecom-clothing-db-ffc86",
    storageBucket: "ecom-clothing-db-ffc86.appspot.com",
    messagingSenderId: "227234751305",
    appId: "1:227234751305:web:a3563b20d88d16418cb098"
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const reference = collection(db, collectionKey);
    const batch = writeBatch(db)
    objectsToAdd.forEach((object) => {
        const docRef = doc(reference, object.title.toLowerCase())
        batch.set(docRef, object)
    });
    await batch.commit()
    console.log("donee")
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef)
    let querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
        const{title,items} = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    },{})
    return categoryMap;
}

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
