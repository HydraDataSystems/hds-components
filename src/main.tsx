import React from "react";
import ReactDom from "react-dom/client";
import { useForm } from "react-hook-form";
import { DatePicker, Button } from "./index";
import FormDatePicker from "./components/FormDatePicker/FormDatePicker";

const App = () => {
  const { control, setValue } = useForm();

  return (
    <div className="flex my-4 mx-20 gap-8">
      <div className="flex flex-col">
        <DatePicker label="Label" />
      </div>

      <div className="flex flex-col">
        <Button title="My Button" />
      </div>

      <div className="flex flex-col">
        <FormDatePicker
          formField="date1"
          onShowChange={() => { }}
          control={control}
          setValue={setValue}
        />
      </div>

      <div className="flex flex-col">
        <FormDatePicker
          formField="date2"
          onShowChange={() => { }}
          control={control}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);