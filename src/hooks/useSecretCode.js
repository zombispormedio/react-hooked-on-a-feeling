import { useState, useEffect, useCallback } from "react";

export const useSecretCode = expectedSequence => {
  const [achieved, setAchieved] = useState(false);
  const [sequence, setSequence] = useState([]);

  const keyPress = useCallback(
    e => setSequence(prev => [...prev, e.keyCode]),
    []
  );

  const cancel = useCallback(
    () => document.removeEventListener("keydown", keyPress),
    []
  );

  useEffect(() => {
    const currentIndex = sequence.length - 1;
    if (currentIndex === -1) return;
    const currentCode = sequence[currentIndex];

    if (currentCode !== expectedSequence[currentIndex]) {
      setSequence([]);
      return;
    }

    if (sequence.toString() === expectedSequence.toString()) {
      setAchieved(true);
      setSequence([]);
      document.removeEventListener("keydown", keyPress);
    }
  }, [sequence]);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  return { achieved, sequence, cancel };
};
