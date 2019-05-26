import React from "react";
import { useSpeechRecognition } from "../hooks";

export const SpeechPlayground = () => {
  const { recognizing, talk, transcript } = useSpeechRecognition({
    lang: "es-ES"
  });
  return (
    <div>
      {recognizing ? (
        "Recognizing"
      ) : (
        <>
          <button type="button" onClick={talk}>
            Start
          </button>
          <p>{transcript}</p>
        </>
      )}
    </div>
  );
};
