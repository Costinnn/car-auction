import { useEffect, useState } from "react";

const Timer = (data) => {
  const expireDate = new Date(data).getTime();

  const [timeLeft, setTimeLeft] = useState(expireDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(expireDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [expireDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default Timer;
