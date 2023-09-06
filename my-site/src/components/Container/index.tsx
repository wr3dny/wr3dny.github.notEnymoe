import { useState } from "react";
import { Button } from "../../common_components/Button";
import { DataGrid } from "../../common_components/DataGrid";
import { InputWithEnter } from "../../common_components/Input";
import "./styles.scss";
import { Select } from "../../common_components/Select";
import { CurrentDate } from "../../common_components/CurrentDate";
import Countdown from "../../common_components/CountdownTimer";
import { TestBlok } from "../../common_components/Array/Array";

export const Container = () => {
  const options = [
    { value: "1", label: "First" },
    { value: "2", label: "Second" },
    { value: "3", label: "Third" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = () => {
    alert("You clicked me!");
  };

  const targetDate = new Date("2024-12-31T23:59:59");

  return (
    <div className="page-container">
      <p>Very very chaotic page</p>
      <InputWithEnter />
      <Button onClick={handleClick} />
      <Select options={options} value={selectedValue} onChange={handleChange} />
      <div className="work-progress">
        <div className="first">Work in progress till end of 2024</div>
        <div className="second">Days left:</div>
        <div className="third">
          <Countdown targetDate={targetDate} />
        </div>
      </div>
      <TestBlok />
      <div></div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
