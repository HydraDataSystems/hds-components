import React from "react";
import "./index.css";
import DatePicker from "./components/DatePicker";
import Button from "./components/Button";
import Accordion from "./components/Accordion";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./components/FormInput";
import ReactDOM from "react-dom/client";
import Badge from "./components/Badge";
import FormDatePicker from "./components/FormDatePicker";

const App = () => {
  const methods = useForm({
    defaultValues: {
      testInput: "",
      emailInput: "",
      telInput: "",
      date1: "",
      date2: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    return;
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
        <div>
          <label>Normal Priority header</label>
          <Accordion title="Accordion Header" headerSize="normal" active>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias accusantium corrupti et doloremque, ab sint officiis
                eius sapiente, facilis quo inventore ad libero fugiat autem.
                Repellat similique optio tenetur aperiam.
              </p>
            </div>
          </Accordion>
        </div>
        <br />
        <div>
          <label>Detached secondary header arrow end</label>
          <Accordion
            title="Accordion Header"
            headerSize="normal"
            headerStyle="secondary"
            detached
            iconPosition="end"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              accusantium corrupti et doloremque, ab sint officiis eius
              sapiente, facilis quo inventore ad libero fugiat autem. Repellat
              similique optio tenetur aperiam.
            </p>
          </Accordion>
        </div>
        <br />
        <div>
          <label>Compact white header</label>
          <Accordion
            title="Accordion Header"
            headerSize="compact"
            contentStyle="compact"
            headerStyle="white"
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias accusantium corrupti et doloremque, ab sint officiis
                eius sapiente, facilis quo inventore ad libero fugiat autem.
                Repellat similique optio tenetur aperiam.
              </p>
            </div>
          </Accordion>
        </div>
        <br />
        <div>
          <label>Disabled</label>
          <Accordion title="Accordion Header" disabled>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              accusantium corrupti et doloremque, ab sint officiis eius
              sapiente, facilis quo inventore ad libero fugiat autem. Repellat
              similique optio tenetur aperiam.
            </p>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Badge type="success" content="Success" />
        <Badge type="warning" content="Warning" />
        <Badge type="alert" content="Alert" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 px-4"
          >
            <FormInput
              label="Test Input"
              name="testInput"
              type="text"
              register={methods.register}
              errors={errors}
              required={true}
            />
            <FormInput
              label="Email Input"
              name="emailInput"
              type="email"
              register={methods.register}
              errors={errors}
            />
            <FormInput
              label="Tel Input"
              name="telInput"
              type="tel"
              register={methods.register}
              errors={errors}
              autocomplete={true}
            />
            <Button
              title="Submit"
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white"
            />
          </form>
        </FormProvider>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <FormDatePicker
            label="Label 1"
            formField="date1"
            onShowChange={() => {}}
            control={methods.control}
            setValue={methods.setValue}
          />
        </div>

        <div className="flex flex-col">
          <FormDatePicker
            label="Label 2"
            formField="date2"
            onShowChange={() => {}}
            control={methods.control}
            setValue={methods.setValue}
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
