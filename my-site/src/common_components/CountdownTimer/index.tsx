import "./styles.scss";

import { useState, useEffect } from "react";

interface Props {
  targetDate: Date;
}

export const Countdown = ({ targetDate }: Props) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    targetDate.getTime() - Date.now()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetDate.getTime() - Date.now();
      setTimeRemaining(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const hoursString = hours < 10 ? `0${hours}` : hours;
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const minutesString = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className="till">
      <div className="day-till">{days}</div>
      <div className="smaller-till">
        <div className="hour-till">{hoursString} </div>
        <div className="minutes-till">{minutesString} </div>
      </div>
    </div>
  );
};

export default Countdown;
