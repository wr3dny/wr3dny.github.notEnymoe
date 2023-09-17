import "./App.css";
import { useEffect, useState } from "react";
import Countdown from "./common_components/CountdownTimer";
import { Footer } from "./components/Footer";
import { JSONhandler } from "./common_components/JSONhandler";

// Define a Theme type for better type safety
type Theme = "light" | "dark";

const initialTheme = (): Theme => {
  const theme = localStorage.getItem("theme");
  return theme && (theme === "light" || theme === "dark") ? theme : "light";
};

export const App = () => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Save the current theme to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const readFromJSON = () => {
    const savedJSON = localStorage.getItem("json");
    if (savedJSON) {
      const obj = JSON.parse(savedJSON);
      console.log(obj);
    }
  };

  useEffect(() => {
    readFromJSON();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <button onClick={toggleTheme}>Switch</button>
      </div>
      <div>
        <p>Poor and chaotic, isn't it ? </p>
      </div>
      <JSONhandler />
      <Footer />
    </>
  );
};
