import Countdown from "../../common_components/CountdownTimer";
import { CurrentDate } from "../../common_components/CurrentDate";
import "./styles.scss";

export const Footer = () => {
  const targetDate = new Date("2024-06-30T23:59:59");
  return (
    <>
      <div className="current-date">
        <CurrentDate />
      </div>
      <div className="countdown">
        <div className="countdown-inner">
          <Countdown targetDate={targetDate} />
        </div>
      </div>
    </>
  );
};
