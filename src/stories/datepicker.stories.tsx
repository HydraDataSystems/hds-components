import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DatePicker, DatePickerProps } from "../index";
import { fn } from "@storybook/test";

export default {
  component: DatePicker,
  title: 'HDS/DatePicker',
  args: { onChange: fn() },
  argTypes: { onChange: { action: 'changed' } }
} as Meta;

const Template: StoryFn<DatePickerProps> = (args) => {
  args.initialDate = "11/01/2023"
  return (
    <DatePicker {...args} />
  )
}

export const Default = Template.bind({});