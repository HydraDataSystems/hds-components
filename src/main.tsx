import React from "react";
import ReactDom from "react-dom/client";
import { DatePicker } from "./index";
import { Button } from "./index";
import Badge from "./components/Badge";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div className="flex my-4 mx-20 gap-8">
    <div className="flex flex-col">
    <DatePicker label="Label" initialDate="2023-11-01" />
    </div>

    <div className="flex flex-col">
    <Button title="My Button" />
    </div>

    <div className="flex flex-col gap-2">
    <Badge type="success" content= "Success" />
    <Badge type="warning" content= "Warning" />
    <Badge type="alert" content= "Alert" />
    </div>
  </div>
);