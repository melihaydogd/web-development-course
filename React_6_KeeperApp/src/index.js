import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

if (document.baseURI === "http://localhost:3000/") {
  console.log("Started App");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
