import { useState, useEffect, useMemo, useRef, useCallback } from "react";

const calculateCountdown = countDownTime => {
  const now = new Date().getTime();

  const distance = countDownTime - now;

  if (distance < 0) {
    return {
      expired: true,
      values: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  }

  return {
    expired: false,
    values: {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  };
};

export const useCountDown = countDownDate => {
  const intervalId = useRef(null);
  const countDownTime = useMemo(() => new Date(countDownDate).getTime(), [
    countDownDate
  ]);
  const [{ expired, values }, setResult] = useState(() =>
    calculateCountdown(countDownTime)
  );

  const cancel = useCallback(() => clearInterval(intervalId.current), [
    intervalId
  ]);

  useEffect(() => {
    if (expired) return undefined;
    intervalId.current = setInterval(() => {
      const newResult = calculateCountdown(countDownTime);

      if (newResult.expired) {
        clearInterval(intervalId.current);
      }

      setResult(newResult);
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return {
    ...values,
    expired,
    cancel
  };
};

/* export const CountDown = () => {
  const { expired, days, hours, minutes, seconds } = useCountDown(
    "2019-06-11 19:00"
  );
  return expired ? "Expired" : `${days}d ${hours}h ${minutes}m ${seconds}s`;
}; */
