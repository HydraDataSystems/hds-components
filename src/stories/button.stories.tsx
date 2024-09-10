import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonProps } from "../index";
import { MdOutgoingMail } from 'react-icons/md';

export default {
  component: Button,
  title: 'HDS/Buttons',
  args: { onClick: fn() },
  argTypes: { onClick: { action: 'clicked' }}
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  )
}

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const White = Template.bind({});
export const Disabled = Template.bind({});
export const ExtraClasses = Template.bind({});
export const WithLeadingIcon = Template.bind({});
export const WithTrailingIcon = Template.bind({});
export const WithLeadingSpinner = Template.bind({});
export const WithTrailingSpinner = Template.bind({});
export const WithLoadingSpinner = Template.bind({});

Primary.args = {
  btnStyle: "primary",
  title: "Primary"
};

Secondary.args = {
  btnStyle: "secondary",
  title: "Secondary"
};

White.args = {
  btnStyle: "white",
  title: "White"
};

Disabled.args = {
  btnStyle: "primary",
  title: "Disabled",
  disabled: true,
}

WithLeadingIcon.args = {
  btnStyle: "primary",
  title: "Leading Icon",
  LeadingIcon: MdOutgoingMail
}

WithTrailingIcon.args = {
  btnStyle: "primary",
  title: "Trailing Icon",
  TrailingIcon: MdOutgoingMail
}

ExtraClasses.args = {
  btnStyle: "primary",
  title: "Extra Class",
  className: "margin-top",
}

WithLeadingSpinner.args = {
  title: "Leading Spinner",
  busy: true,
  LeadingIcon: MdOutgoingMail
}

WithTrailingSpinner.args = {
  title: "Trailing Spinner",
  busy: true,
  TrailingIcon: MdOutgoingMail
}

WithLoadingSpinner.args = {
  title: "With Loading Only",
  busy: true
}