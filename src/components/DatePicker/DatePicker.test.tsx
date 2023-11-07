import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DatePicker from "./index";

describe("DatePicker", () => {
  test("renders datepicker with correct Label", () => {
    render(<DatePicker label="My Label" />);
    expect(screen.getByText("My Label")).toBeInTheDocument();
  });

  test("renders datepicker with correct initial date", () => {
    render(<DatePicker initialDate="2023-11-01" />);
    expect(screen.getByRole("textbox")).toHaveValue("01/11/2023");
  });

  test("When changing date from 01/11/23, clicking decrement and then 25, should be 25/10/23", async () => {
    render(<DatePicker initialDate="2023-11-01" />);
    const field = screen.getByRole("textbox");

    await userEvent.click(field);

    const leftArrow = screen.getByRole("button", { name: "Decrement" });

    await userEvent.click(leftArrow);

    const day = screen.getByText("25");

    await userEvent.click(day);

    expect(field).toHaveValue("25/10/2023");
  });
});