import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};
