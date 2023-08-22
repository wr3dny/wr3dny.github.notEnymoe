import Countdown from "../../common_components/CountdownTimer";
import "./styles.scss";

export const Footer = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  return (
    <>
      <div className="left-part">
        <p>Left icon</p>
      </div>
      <div className="right-part">
        <div className="left-right">Till last day</div>
      </div>
      <div className="countdown">
        <div className="countdown-inner">
          <Countdown targetDate={targetDate} />
        </div>
      </div>
    </>
  );
};
