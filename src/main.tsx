import React from "react";
import ReactDom from "react-dom/client";
import { DatePicker } from "./index";
import { Button } from "./index";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div className="flex my-4 mx-20 gap-8">
    <div className="flex flex-col">
      <DatePicker label="Label" />
    </div>

    <div className="flex flex-col">
      <Button title="My Button" />
    </div>
  </div>
);