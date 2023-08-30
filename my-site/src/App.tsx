import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { MenuList } from "./common_components/MenuList";
import { Select } from "./common_components/Select";

export const App = () => {
  return (
    <div className="App">
      <MenuList />
      <Header />
      <Container />
      <Footer />
    </div>
  );
};
