import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Accordion, AccordionProps } from "../components/Accordion";
import { HiOutlineBell } from "react-icons/hi2";

export default {
  title: "HDS/Accordion",
  component: Accordion,
  argTypes: {
    onToggle: { action: "toggled" },
  },
} as Meta;

const Template: StoryFn<AccordionProps & { children: React.ReactNode }> = ({
  children,
  ...args
}) => <Accordion {...args}>{children}</Accordion>;
export const Default = Template.bind({});
export const Expanded = Template.bind({});
export const CustomTemplate = Template.bind({});
export const CompactSize = Template.bind({});
export const CustomTransition = Template.bind({});
export const WithIcon = Template.bind({});
export const ToggleIconEnd = Template.bind({});
export const DetachedBody = Template.bind({});
export const Disabled = Template.bind({});
export const CustomStyles = Template.bind({});

Default.args = {
  header: { title: "Default Accordion" },
  body: {},
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum atque
      labore in expedita eos aperiam vero nam cumque. Ipsa quasi aliquam iste
      blanditiis maiores debitis dicta praesentium vel odio!
    </p>
  ),
};

Expanded.args = {
  ...Default.args,
  expanded: true,
  header: { title: "Expanded Accordion" },
};
Expanded.decorators = Default.decorators;

CustomTemplate.args = {
  ...Default.args,
  header: { title: "Custom Template", template: "secondary" },
};
CustomTemplate.decorators = Default.decorators;

CompactSize.args = {
  ...Default.args,
  header: { title: "Compact Size", size: "compact" },
  body: { size: "compact" },
};
CompactSize.decorators = [
  (Story) => (
    <Story>
      <p>This is compact content.</p>
    </Story>
  ),
];

CustomTransition.args = {
  ...Default.args,
  header: { title: "Custom Transition" },
  body: { transition: "linear" },
};
CustomTransition.decorators = [
  (Story) => (
    <Story>
      <p>This has a linear transition.</p>
    </Story>
  ),
];

WithIcon.args = {
  ...Default.args,
  header: {
    title: "Accordion with Icon",
    icon: { name: HiOutlineBell, position: "start" },
  },
};
WithIcon.decorators = Default.decorators;

ToggleIconEnd.args = {
  ...Default.args,
  header: { title: "Toggle Icon at End" },
  toggleIcon: "end",
};
ToggleIconEnd.decorators = Default.decorators;

Disabled.args = {
  ...Default.args,
  header: { title: "Disabled Accordion" },
  disabled: true,
};
Disabled.decorators = Default.decorators;

DetachedBody.args = {
  ...Default.args,
  header: { title: "Detached Body" },
  body: { detached: true },
};
DetachedBody.decorators = [
  (Story) => (
    <Story>
      <p>This is a detached body.</p>
    </Story>
  ),
];

CustomStyles.args = {
  ...Default.args,
  header: {
    title: "Custom Styles",
    custom: "bg-purple-500 text-white",
  },
  body: {
    custom: "bg-purple-100 p-4",
  },
};
CustomStyles.decorators = [
  (Story) => (
    <Story>
      <p>This has custom styles.</p>
    </Story>
  ),
];
