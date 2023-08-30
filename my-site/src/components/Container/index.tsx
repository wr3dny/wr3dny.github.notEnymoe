import { Button } from "../../common_components/Button";
import { CurrentDate } from "../../common_components/CurrentDate";
import { DataGrid } from "../../common_components/DataGrid";
import { InputWithEnter } from "../../common_components/Input";
import "./styles.scss";

export const Container = () => {
  return (
    <div className="pageContainer">
      <p>Very very chaotic page</p>
      <InputWithEnter />
      <Button />
      <DataGrid />
      <CurrentDate />
      <div></div>
      <div>Here will be something</div>
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
