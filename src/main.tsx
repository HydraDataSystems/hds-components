import React from "react";
import "./index.css";
import DatePicker from "./components/DatePicker";
import Button from "./components/Button";
import Accordion from "./components/Accordion";
import ReactDOM from "react-dom/client";
import Badge from "./components/Badge";
import { HiOutlineBell } from "react-icons/hi2";

const App = () => {
  const accordionProps = {
    header: {
      title: (
        <h2>
          Accordion Header with <span className="text-red-500">HTML</span>
        </h2>
      ),
      template: "primary" as const,
      icon: {
        name: HiOutlineBell,
        position: "start" as const,
      },
    },
    body: {
      size: "normal" as const,
      transition: "ease-in-out" as const,
      detached: true,
    },
    expanded: false,
  };

  return (
    <div className="flex my-4 mx-20 gap-8">
      <div className="flex flex-col">
        <DatePicker label="Label" initialDate="2023-11-01" />
      </div>

      <div className="flex flex-col">
        <Button title="My Button" />
      </div>
      <div className="flex flex-col min-w-72">
        <Accordion {...accordionProps}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            exercitationem delectus laboriosam ipsam eos quibusdam explicabo
            numquam consectetur aperiam laborum architecto perferendis nobis
            expedita similique autem tempora qui, accusantium fuga.
          </p>
        </Accordion>
      </div>

      <div className="flex flex-col min-w-72 gap-4">
        <div className="flex flex-row">
          <Badge template="success" content="Success" style="filled" />
        </div>

        <div className="flex flex-row">
          <Badge template="warning" content="Warning" />
        </div>

        <div className="flex flex-row">
          <Badge template="alert" content="Alert" style="empty" compact />
        </div>

        <div className="flex flex-row">
          <Badge template="default" content="Default" />
        </div>

        <div className="flex flex-row">
          <Badge template="progress" content="Progress" style="empty" outline />
        </div>
        <div className="flex flex-row">
          <Badge template="notification" content="5" type="number" outline />
        </div>
        <div className="flex flex-row">
          <Badge
            template="success"
            content={0}
            type="number"
            compact
            outline
            showZero
          />
        </div>
        <div className="flex flex-row">
          <Badge
            template="success"
            style="filled"
            content={35}
            type="number"
            outline
            counterOverflow={9}
          />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
