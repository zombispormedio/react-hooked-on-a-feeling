import React, { useEffect, useRef, useCallback } from "react";
import { useSpeechRecognition, useActivity } from "../hooks";

export const SpeechPlayground = () => {
  const { recognizing, talk, transcript } = useSpeechRecognition({
    lang: "es-ES"
  });
  const onMount = useRef(false);
  const { notify } = useActivity();

  useEffect(() => {
    if (recognizing) notify("Starting recognition");
    else if (onMount.current)
      notify(`Stopped recognition. Transcript: ${transcript}`);

    if (!onMount.current) {
      onMount.current = true;
    }
  }, [recognizing]);

  const onClick = useCallback(() => {
    notify("Start recognizing clicked");
    talk();
  }, [talk]);

  return (
    <div>
      {recognizing ? (
        "Recognizing"
      ) : (
        <>
          <button type="button" onClick={onClick}>
            Start
          </button>
          <p>{transcript}</p>
        </>
      )}
    </div>
  );
};
