import { useRef, useEffect, useState } from "react";

window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;

export const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState();
  const [recognizing, setRecognizing] = useState(false);
  const [error, setError] = useState();
  const recognitionRef = useRef();

  useEffect(() => {
    const recognition = new window.SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.onresult = event => {
      const last = event.results.length - 1;
      setTranscript(event.results[last][0].transcript);
    };
    recognition.onerror = event => setError(event);
    recognition.onstart = () => setRecognizing(true);
    recognition.onend = () => setRecognizing(false);
    recognition.onspeechend = () => recognition.stop();
    recognitionRef.current = recognition;
  }, []);

  return {
    error,
    start: () => {
      setTranscript("");
      recognitionRef.current.start();
    },
    recognizing,
    transcript
  };
};
