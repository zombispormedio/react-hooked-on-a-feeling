import { useState, useEffect, useMemo } from "react";

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

const useCountDown = countDownDate => {
  const [expired, setExpired] = useState(false);
  const countDownTime = useMemo(() => new Date(countDownDate).getTime(), [
    countDownDate
  ]);
  const [timeCalculations, setTimeCalculations] = useState(() => {
    const { values } = calculateCountdown(countDownTime);
    return values;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { expired: isExpiredNow, values } = calculateCountdown(
        countDownTime
      );

      if (isExpiredNow) {
        setExpired(isExpiredNow);
        clearInterval(intervalId);
      }

      setTimeCalculations(values);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    ...timeCalculations,
    expired
  };
};

export const CountDown = () => {
  const { expired, days, hours, minutes, seconds } = useCountDown(
    "2019-06-11 19:00"
  );
  return expired ? "Expired" : `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
