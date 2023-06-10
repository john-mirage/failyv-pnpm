import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  component: "faily-text-input",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () =>
    html`<faily-text-input
      label="primary"
      placeholder="primary"
    ></faily-text-input>`,
};

export const Secondary: Story = {
  render: () =>
    html`<faily-text-input
      label="secondary"
      placeholder="secondary"
    ></faily-text-input>`,
};
