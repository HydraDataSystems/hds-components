import React from "react";
import ReactDom from "react-dom/client";
import { DatePicker } from "./index";
import { Button } from "./index";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./components/FormInput";

const App = () => {
  const methods = useForm({
    defaultValues: {
      testInput: '',
      emailInput: '',
      telInput: ''
    }
  });

  const { handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: any) => {
    return
  };

return (
  <div className="flex my-4 mx-20 gap-8">
    <div className="flex flex-col">
    <DatePicker label="Label" initialDate="2023-11-01" />
    </div>

    <div className="flex flex-col">
    <Button title="My Button" />
    </div>

    <div className="flex flex-col gap-4 p-4">
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
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
        <Button title="Submit" type="submit" className="mt-4 p-2 bg-blue-500 text-white" />
      </form>
    </FormProvider>
  </div>
  </div>
);

};

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
