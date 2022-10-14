import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";
import { MdOutgoingMail } from 'react-icons/md';

export default {
  component: Button,
  title: 'Cascade/Buttons',
  argTypes: { onClick: { action: 'clicked' }}
} as Meta;

const Template: Story<ButtonProps> = (args) => {
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