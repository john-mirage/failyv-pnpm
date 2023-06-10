import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  component: "faily-button",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<faily-button variant="primary">button</faily-button>`,
};

export const Secondary: Story = {
  render: () => html`<faily-button variant="secondary">button</faily-button>`,
};
