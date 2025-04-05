import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import Loading from "../components/Loading";
import { get, onValue, push, ref, set, update } from "firebase/database";
import { database } from "../config/firebaseConfig";
import { questionsByTemplate } from "../questions/questions";
import Question from "./Question";

export default function QuizPage() {
  const { roomID } = useParams();
  const { uid, username, isRetrievingPreviousUser } = useFirebaseAuth();
  const [isHost, setIsHost] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hostName, setHostName] = useState("");
  const [friendName, setFriendName] = useState("");

  const startGame = (roomRef) => {
    update(roomRef, {
      status: "started",
    })
      .then(() => {
        console.log("Field updated!");
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };
  const joinGame = (roomRef) => {
    update(roomRef, {
      friendJoined: true,
      friendUid: uid,
      friendUsername: username,
    })
      .then(() => {
        console.log("Field updated!");
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };
  const loadQuestions = (templateId) => {
    let q = questionsByTemplate.find((q) => q.templateId === templateId);
    if (q) {
      setQuestions(q.questions);
    }
  };

  useEffect(() => {
    if (isRetrievingPreviousUser) return;
    const roomRef = ref(database, `rooms/${roomID}`);
    get(roomRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          loadQuestions(data.questionTemplateId);
          setHostName(data.createdByUsername);
          setFriendName(data.friendUsername);
          if (data.createdByUid === uid) {
            startGame(roomRef);
            setIsHost(true);
          } else {
            joinGame(roomRef);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (data.friendJoined === true && data.status === "started") {
          setGameStarted(true);
        }
      }
    });
  }, [isRetrievingPreviousUser]);

  if (isRetrievingPreviousUser) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const optionClicked = (optionIndex) => {
    if (isHost) {
      const roomRef = ref(database, `rooms/${roomID}/`);
      get(roomRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const currentAnswers = data.hostAnswers || [];
          const updatedAnswers = [...currentAnswers, optionIndex];
          set(ref(database, `rooms/${roomID}/hostAnswers`), updatedAnswers);
        }
      });
    } else {
      const roomRef = ref(database, `rooms/${roomID}/`);
      get(roomRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const currentAnswers = data.friendAnswers || [];
          const updatedAnswers = [...currentAnswers, optionIndex];
          set(ref(database, `rooms/${roomID}/friendAnswers`), updatedAnswers);
        }
      });
    }
    setQuestionIndex((prev) => {
      return prev + 1;
    });
  };

  if (gameStarted && questions.length > 0) {
    if (questionIndex < questions.length) {
      return (
        <>
          <div className="flex w-screen justify-end">
            {isHost ? "Host" : "Client"}
          </div>
          <div className="flex flex-col mt-12 gap-10">
            <h1 className="text-center font-extrabold text-2xl">
              {questionIndex + 1}/{questions.length}
            </h1>
            <div>
              {/* question, isHost, hostName, friendName */}
              <Question
                question={questions[questionIndex]}
                isHost={isHost}
                hostName={hostName}
                friendName={friendName}
                optionClicked={optionClicked}
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>Result</div>
        </>
      );
    }
  } else {
    return (
      <div className="flex h-screen items-center justify-center">
        Waiting for everyone to join...
      </div>
    );
  }
}
