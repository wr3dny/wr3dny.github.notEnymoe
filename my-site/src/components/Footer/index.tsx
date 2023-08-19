import Countdown from "../../common_components/CountdownTimer";
import "./styles.scss";

export const Footer = () => {
  const endOfTime = () => {
    const hide = "-hidden";
    const targetDate = new Date("2024-12-31T23:59:59");
    const remaining = targetDate.getTime() - Date.now();
    if (remaining <= 0) {
      return hide;
    } else {
      return "";
    }
  };
  const targetDate = new Date("2024-12-31T23:59:59");
  return (
    <>
      <div className="left-part">
        <p>Left icon</p>
      </div>
      <div className="right-part">
        <div className="left-right">Till last day</div>
      </div>
      <div className={`countdown`}>
        <Countdown targetDate={targetDate} />
      </div>
    </>
  );
};
