import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from "./index";

describe("Badge Component", () => {
  test("renders Badge with correct count and type (success)", () => {
    render(<Badge template="success" content={5} />);
    const badge = screen.getByText("5");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "inline-flex items-center justify-center text-xs font-medium bg-green-100 text-green-800 ring-1 ring-inset ring-green-600/20 border border-green-300 ml-2 h-6 w-6 rounded-md px-2.5 py-0.5 min-w-[4rem]"
    );
  });

  test("renders Badge with correct count and template (alert)", () => {
    render(<Badge template="alert" content={10} />);
    const badge = screen.getByText("10");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "inline-flex items-center justify-center text-xs font-medium bg-red-100 text-red-800 ring-1 ring-inset ring-red-600/20 border border-red-300 ml-2 h-6 w-6 rounded-md px-2.5 py-0.5 min-w-[4rem]"
    );
  });

  test("renders Badge with correct count and template (warning)", () => {
    render(<Badge template="warning" content={3} />);
    const badge = screen.getByText("3");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "inline-flex items-center justify-center text-xs font-medium bg-orange-100 text-orange-800 ring-1 ring-inset ring-orange-600/20 border border-orange-300 ml-2 h-6 w-6 rounded-md px-2.5 py-0.5 min-w-[4rem]"
    );
  });

  test("renders Badge with correct count and template (default)", () => {
    render(<Badge template="warning" content={0} />);
    const badge = screen.getByText("0");
    expect(badge).toBeInTheDocument();
  });
});
