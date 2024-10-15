import React, { act } from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./index";

// Mocking ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe("AccordionItem", () => {
  // TODO: Test commented for now. Need to figure out why height is allways 0px
  /*test('toggles content visibility on click', async () => {
        const { container, debug } = render(
          <Accordion barContent="Accordion Header">
            <div style={{ minHeight: '100px' }}>
                Accordion Content
            </div>
          </Accordion>
        );
      
        const header = screen.getByText('Accordion Header');
        const content = screen.getByTestId('accordion-content');
        const contentDiv = screen.getByTestId('accordion-content');
      
        // Initial debug output
        debug();
      
        const computedStyle = window.getComputedStyle(content!)
      
        expect(container.querySelector('.rotate-90')).toBeNull();
      
        // Assert initial state
        expect(computedStyle.height).toBe('0px');
        expect(content).toHaveClass('overflow-hidden');
      
        // Click to expand
        await act(async () => {
          await userEvent.click(header);
        });
      
        // Debug output after expand
        debug();
      
        await waitFor(() => {
          const expandedStyle = window.getComputedStyle(content!);
          expect(container.querySelector('.rotate-90')).toBeInTheDocument();
          expect(expandedStyle.height).not.toBe('0px');
          expect(content).not.toHaveClass('overflow-hidden');
        });
      
        // Click to collapse
        await act(async () => {
          await userEvent.click(header);
        });
      
        // Debug output after collapse
        debug();
      
        await waitFor(() => {
          const collapsedStyle = window.getComputedStyle(content!);
          expect(container.querySelector('.rotate-90')).toBeNull();
          expect(collapsedStyle.height).toBe('0px');
          expect(content).toHaveClass('overflow-hidden');
        });
      });
      */

  test("calls onToggle callback when toggled", async () => {
    const onToggleSpy = jest.fn();
    render(
      <Accordion title="Accordion Header" onToggle={onToggleSpy}>
        <div>Accordion Content</div>
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

  // test("applies custom headerStyle correctly", () => {
  //   render(
  //     <Accordion
  //       title="Accordion Header"
  //       ="p-4 bg-red-500 flex items-center gap-2"
  //     >
  //       <div>Accordion Content</div>
  //     </Accordion>
  //   );

  //   const header = screen.getByText("Accordion Header").parentElement;
  //   expect(header).toHaveClass("p-4 bg-red-500 flex items-center gap-2");
  // });

  test("applies custom transition correctly", () => {
    render(
      <Accordion title="Accordion Header" transition="linear">
        <div>Accordion Content</div>
      </Accordion>
    );

    const chevron = screen.getByText("Accordion Header").previousSibling;
    expect(chevron).toHaveClass("transition-transform duration-500 linear");
  });
});
