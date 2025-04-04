import React from "react";
import { FirebaseAuthProvider } from "./contexts/FirebaseAuthContext";
import QuizBG from "./pages/QuizBg";
import StartScreen from "./pages/StartScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateRoom from "./pages/CreateRoom";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <StartScreen /> },
    { path: "/create-room", element: <CreateRoom /> },
  ]);

  return (
    <FirebaseAuthProvider>
      <QuizBG>
        <RouterProvider router={router}></RouterProvider>
      </QuizBG>
    </FirebaseAuthProvider>
  );
}
