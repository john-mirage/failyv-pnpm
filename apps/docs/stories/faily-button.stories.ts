import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import "faily-button";
import "faily-text";

const meta: Meta = {
  component: "faily-button",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<faily-button>button</faily-button>`,
};
