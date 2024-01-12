import React from "react";
import ReactDOMClient from "react-dom/client";
import { Aisi } from "./screens/Aisi";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Aisi />);
