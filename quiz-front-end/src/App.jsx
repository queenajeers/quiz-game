import React from "react";
import { FirebaseAuthProvider } from "./contexts/FirebaseAuthContext";
import QuizBG from "./pages/QuizBg";
import StartScreen from "./pages/StartScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateRoom from "./pages/CreateRoom";
import RoomCreated from "./pages/RoomCreated";
import QuizPage from "./pages/QuizPage";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <StartScreen /> },
    { path: "/create-room", element: <CreateRoom /> },
    { path: "/room-created", element: <RoomCreated /> },
    { path: "/play/:roomID", element: <QuizPage /> },
  ]);

  return (
    <FirebaseAuthProvider>
      <QuizBG>
        <RouterProvider router={router}></RouterProvider>
      </QuizBG>
    </FirebaseAuthProvider>
  );
}
