import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import css here
import "./Styles/ChatApp.scss";
import "./Styles/LoginScreen.css";
import LoginScreen from "./Component/LoginScreen";
import ChatApp from "./Screens/ChatApp";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />
  },
  {
    path: "/chat",
    element: <ChatApp />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
