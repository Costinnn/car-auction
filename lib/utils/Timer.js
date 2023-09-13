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

  const days = new Date(timeLeft).getDate();
  const hours = new Date(timeLeft).getHours();
  const minutes = new Date(timeLeft).getMinutes();
  const seconds = new Date(timeLeft).getSeconds();

  return { days, hours, minutes, seconds };
};

export default Timer;
