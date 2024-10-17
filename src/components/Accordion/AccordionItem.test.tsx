import React, { act } from "react";
import "@testing-library/jest-dom";
import { prettyDOM, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./index";

// Mocking ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe("AccordionItem", () => {
  // TODO: Re-design this test
  test("toggles content visibility on click", async () => {
    const onToggleMock = jest.fn();
    const { container } = render(
      <Accordion
        header={{ title: "Accordion Header" }}
        body={{}}
        onToggle={onToggleMock}
      >
        <p>Lorem ipsum dolor sit amet consectetur...</p>
      </Accordion>
    );

    const header = screen.getByTestId("accordion-header");
    const content = screen.getByTestId("accordion-content");

    // Initial state
    expect(content).toHaveStyle("height: 0px");
    expect(content).toHaveClass("overflow-hidden");
    expect(container.querySelector(".rotate-90")).toBeNull();

    // Click to expand
    await act(async () => {
      await userEvent.click(header);
    });

    // Assert that onToggle was called once
    expect(onToggleMock).toHaveBeenCalledTimes(1);

    // Wait for expanded state
    await waitFor(() => {
      // expect(content).not.toHaveStyle("height: 0px");
      expect(content.style.height).not.toBe("0px");
      expect(content.style.height).not.toBe("");
    });

    // Check expanded state
    expect(content).not.toHaveClass("overflow-hidden");
    expect(container.querySelector(".rotate-90")).toBeInTheDocument();

    // Reset the mock for the next click
    onToggleMock.mockClear();

    // Click to collapse
    await userEvent.click(header);

    // Assert that onToggle was called once
    expect(onToggleMock).toHaveBeenCalledTimes(1);

    // Wait for collapsed state
    await waitFor(() => {
      expect(content).toHaveStyle("height: 0px");
    });

    // Check collapsed state
    expect(content).toHaveClass("overflow-hidden");
    expect(container.querySelector(".rotate-90")).toBeNull();
  });
});

test("calls onToggle callback when toggled", async () => {
  const onToggleSpy = jest.fn();
  render(
    <Accordion
      header={{ title: "Accordion Header" }}
      body={{}}
      onToggle={onToggleSpy}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        exercitationem delectus laboriosam ipsam eos quibusdam explicabo numquam
        consectetur aperiam laborum architecto perferendis nobis expedita
        similique autem tempora qui, accusantium fuga.
      </p>
    </Accordion>
  );

  const header = screen.getByText("Accordion Header");
  await act(async () => {
    await userEvent.click(header);
  });

  expect(onToggleSpy).toHaveBeenCalledTimes(1);

  await act(async () => {
    await userEvent.click(header);
  });

  expect(onToggleSpy).toHaveBeenCalledTimes(2);
});

test("applies custom header styles correctly", () => {
  render(
    <Accordion
      header={{
        title: "Accordion Header",
        custom: "bg-red-500 text-white",
        size: "normal",
        template: "primary",
      }}
      body={{}}
    >
      <div>Accordion Content</div>
    </Accordion>
  );

  const headerContainer = screen.getByTestId("accordion-header");
  const header = headerContainer.firstChild as HTMLElement;

  expect(header).toHaveClass("flex");
  expect(header).toHaveClass("items-center");
  expect(header).toHaveClass("gap-2");
  expect(header).toHaveClass("transition-colors");
  expect(header).toHaveClass("duration-200");
  expect(header).toHaveClass("p-4");
  expect(header).toHaveClass("bg-red-500");
  expect(header).toHaveClass("text-white");
  expect(header).toHaveClass("cursor-pointer");
});

test("applies custom transition correctly", async () => {
  await render(
    <Accordion
      header={{ title: "Accordion Header" }}
      body={{ transition: "linear" }}
    >
      <div>Accordion Content</div>
    </Accordion>
  );

  const chevron = screen.getByText("Accordion Header").previousSibling;
  expect(chevron).toHaveClass("transition-transform");
  expect(chevron).toHaveClass("duration-500");
  expect(chevron).toHaveClass("linear");
});
