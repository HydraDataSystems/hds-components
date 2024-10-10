import React from "react";
import ReactDom from "react-dom/client";
import { DatePicker } from "./index";
import { Button } from "./index";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div className="flex my-4 mx-20 gap-8">
    <div className="flex flex-col border-slate-800 border-2 p-4 rounded-md border-opacity-25 hover:border-opacity-75">
    <DatePicker label="Label" initialDate="2023-11-01" />

    </div>
    <div className="flex flex-col border-slate-800 border-2 p-4 rounded-md border-opacity-25 hover:border-opacity-75">
    <Button title="My Button" />
    </div>
  </div>
);