import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";

export default {
  component: Button,
  title: 'Cascade/Buttons'
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return (
    <Button {...args}>Button</Button>
  )
}

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const White = Template.bind({});

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