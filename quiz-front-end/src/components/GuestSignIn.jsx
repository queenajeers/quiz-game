import React, { useEffect, useState } from "react";
import { signInAnonymously, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export default function GuestSignIn() {
  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(false);

  // On mount, check if already signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthAction = async () => {
    setLoading(true);

    try {
      if (!uid) {
        const result = await signInAnonymously(auth);
        setUid(result.user.uid);
      } else {
        await signOut(auth);
        setUid("");
      }
    } catch (error) {
      console.error("Auth error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <p className="text-green-600 mb-4 break-all">
        {uid ? `Logged in as: ${uid}` : "Not signed in"}
      </p>
      <button
        onClick={handleAuthAction}
        className={`p-3 px-6 rounded-md font-semibold transition ${
          uid ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
        } text-white`}
        disabled={loading}
      >
        {loading ? "Please wait..." : uid ? "Sign Out" : "Sign In as Guest"}
      </button>
    </div>
  );
}
