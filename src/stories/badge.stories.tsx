// src/stories/badge.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Badge, BadgeProps } from "../index";

export default {
  title: "HDS/Badge",
  component: Badge,
  argTypes: {
    template: {
      control: { type: "select" },
      options: [
        "default",
        "success",
        "progress",
        "warning",
        "alert",
        "notification",
      ],
    },
    content: { control: "text" },
    show: { control: "boolean" },
    outline: { control: "boolean" },
    style: {
      control: { type: "select" },
      options: ["default", "filled", "empty"],
    },
    compact: { control: "boolean" },
    type: {
      control: { type: "select" },
      options: ["string", "number"],
    },
    showZero: { control: "boolean" },
    counterOverflow: { control: "number" },
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Alert = Template.bind({});
export const Notification = Template.bind({});
export const Compact = Template.bind({});
export const Filled = Template.bind({});
export const Empty = Template.bind({});
export const WithCounterOverflow = Template.bind({});

Default.args = {
  template: "default",
  content: "Badge",
  show: true,
  outline: false,
  style: "default",
  compact: false,
  type: "string",
};

Success.args = {
  ...Default.args,
  template: "success",
  content: "Success",
};

Warning.args = {
  ...Default.args,
  template: "warning",
  content: "Warning",
};

Alert.args = {
  ...Default.args,
  template: "alert",
  content: "Alert",
};

Notification.args = {
  ...Default.args,
  template: "notification",
  content: 5,
  type: "number",
};

Compact.args = {
  ...Default.args,
  content: "Compact",
  compact: true,
};

Filled.args = {
  ...Default.args,
  content: "Filled",
  style: "filled",
};

Empty.args = {
  ...Default.args,
  content: "Empty",
  style: "empty",
};

WithCounterOverflow.args = {
  ...Default.args,
  template: "notification",
  content: 1000,
  type: "number",
  counterOverflow: 999,
};
