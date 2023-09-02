import { Burger } from "../Burger";
import "./styles.scss";

export const MenuList = () => {
  return (
    <div className="menu-left">
      <Burger />
      <nav>
        <a href="under/portfolio.html">to show</a>
        <a href="under/kartaKoloru.html">to color</a>
        <a href="under/exp.html">to experiment</a>
        <a href="under/h3.html">Hackaton III</a>
        <a href="under/baza.html">to start</a>
        <a href="under/colorize.html">to colorize</a>
        <a href="under/to_SC.html">to SC</a>
        <a href="under/input.html">input</a>
      </nav>
    </div>
  );
};
