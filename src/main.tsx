import React from "react";
import ReactDom from "react-dom/client";
import { DatePicker } from "./index";
import { Button } from "./index";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div>
    <DatePicker label="My Label" initialDate="2023-11-01" />
    <Button title="My Button" />
  </div>
);