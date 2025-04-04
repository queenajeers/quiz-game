import React, { createContext, useEffect, useState, useContext } from "react";
import { auth, database } from "../config/firebaseConfig";
import { onAuthStateChanged, signInAnonymously, signOut } from "firebase/auth";
import { ref, set, get } from "firebase/database"; // If you're using Realtime DB

// Create context
const FirebaseAuthContext = createContext();

// Hook to use the context
export const useFirebaseAuth = () => useContext(FirebaseAuthContext);

export const FirebaseAuthProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [username, setUsername] = useState(null);
  const [isUserLoggingIn, setIsUserLoggingIn] = useState(false);
  const [isRetrievingPreviousUser, setIsRetrievingPreviousUser] =
    useState(true);

  // Check if user is already logged in on load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);

        // Fetch username from database
        const userRef = ref(database, `users/${uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUsername(data.username || null);
        }
      }

      setIsRetrievingPreviousUser(false);
    });

    return () => unsubscribe();
  }, []);

  // Anonymous login
  const login = async (userNameInput) => {
    setIsUserLoggingIn(true);
    try {
      const result = await signInAnonymously(auth);
      const uid = result.user.uid;

      // Save username to Realtime DB
      const userRef = ref(database, `users/${uid}`);
      await set(userRef, { username: userNameInput });

      setUid(uid);
      setUsername(userNameInput);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsUserLoggingIn(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUid(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <FirebaseAuthContext.Provider
      value={{
        uid,
        username,
        login,
        logout,
        isUserLoggingIn,
        isRetrievingPreviousUser,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
