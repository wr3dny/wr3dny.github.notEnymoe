import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { Hobby } from "../pages/Hobby";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: " hobby",
        element: <Hobby />,
      },
    ],
  },
]);
